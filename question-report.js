(() => {
  'use strict';
  const dialog = document.getElementById('reportModal');
  const form = document.getElementById('questionReportForm');
  const button = document.getElementById('reportQuestionButton');
  const note = document.getElementById('reportNote');
  const status = document.getElementById('reportStatus');
  const submit = document.getElementById('reportSubmitButton');
  const cancel = document.getElementById('reportCancelButton');
  let snapshot;
  let previousSubmission;
  let busy = false;

  button.addEventListener('click', () => {
    const question = getQs()[qIndex];
    if (!question) return;
    const meta = getQuestionMeta(question);
    snapshot = {
      questionId: String(question.id ?? ''),
      curriculum: meta.curriculum || currentProgram || '',
      level: meta.stage || currentLevel || '',
      subject: meta.subject || currentSubject || '',
      topic: meta.topic || currentTopic || '',
      topicKey: meta.key || currentTopicKey || currentTopic || '',
      code: meta.code || currentCode || '',
      part: question.chapterPart || currentPartNumber || null,
      questionNumber: question.position || qIndex + 1,
      question: question.q,
      options: question.a || question.words || [],
      expectedAnswer: getCorrectAnswer(question),
      image: question.localImage || question.image || '',
    };
    form.reset();
    form.querySelector('fieldset').disabled = false;
    previousSubmission = null;
    status.textContent = '';
    status.dataset.state = '';
    submit.hidden = false;
    cancel.textContent = 'Cancel';
    document.getElementById('reportQuestionLabel').textContent = [
      snapshot.level, snapshot.subject, snapshot.topic,
      snapshot.part ? 'Part ' + snapshot.part : '', 'Question ' + snapshot.questionNumber,
    ].filter(Boolean).join(' · ');
    document.getElementById('reportQuestionPreview').textContent = question.q;
    dialog.showModal();
  });

  cancel.addEventListener('click', () => { if (!busy) dialog.close(); });
  dialog.addEventListener('cancel', event => { if (busy) event.preventDefault(); });
  dialog.addEventListener('close', () => button.focus());

  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (busy || submit.hidden || !snapshot) return;
    const reason = form.elements.reason.value;
    const details = note.value.trim();
    const signature = JSON.stringify([reason, details]);
    if (previousSubmission?.signature !== signature) {
      previousSubmission = { signature, id: crypto.randomUUID() };
    }
    busy = true;
    submit.disabled = true;
    cancel.disabled = true;
    const fields = form.querySelector('fieldset');
    fields.disabled = true;
    status.dataset.state = '';
    status.textContent = 'Sending report…';
    try {
      const result = await fetch('/api/question-reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...snapshot, submissionId: previousSubmission.id, reason, details }),
      });
      if (!result.ok) throw new Error('Request failed');
      const confirmation = await result.json();
      if (confirmation.received !== true) throw new Error('Missing confirmation');
      status.dataset.state = 'success';
      status.textContent = 'Report received. Thank you for helping us improve this quiz.';
      submit.hidden = true;
      cancel.textContent = 'Done';
      cancel.disabled = false;
      cancel.focus();
    } catch {
      status.dataset.state = 'error';
      status.textContent = 'Your report could not be sent. Please try again.';
    } finally {
      busy = false;
      fields.disabled = submit.hidden;
      submit.disabled = false;
      cancel.disabled = false;
    }
  });
})();
