(() => {
  'use strict';
  const form = document.getElementById('reviewForm');
  const token = document.getElementById('reviewToken');
  const filter = document.getElementById('reviewStatus');
  const status = document.getElementById('inboxStatus');
  const list = document.getElementById('reportList');
  const more = document.getElementById('loadMore');
  const labels = {
    'wrong-question': 'Incorrect or unclear question',
    'wrong-answer': 'Incorrect answer or answer key',
    explanation: 'Incorrect or unclear explanation',
    image: 'Missing or incorrect image',
    other: 'Other issue',
  };
  let next;
  let loadedFilter;
  let busy = false;

  function message(text, error = false) {
    status.textContent = text;
    status.dataset.error = String(error);
  }

  async function request(path, options = {}) {
    const response = await fetch('/api/question-reports' + path, {
      ...options,
      headers: { Authorization: 'Bearer ' + token.value.trim(), 'Content-Type': 'application/json' },
    });
    if (response.status === 401) throw new Error('Check your review access key.');
    if (!response.ok) throw new Error('Could not reach the reports service. Please try again.');
    return response.json();
  }

  function el(tag, content, container, className) {
    const element = document.createElement(tag);
    element.textContent = content;
    if (className) element.className = className;
    container.appendChild(element);
    return element;
  }

  function render(report) {
    const item = report.snapshot || {};
    const card = el('article', '', list, 'report');
    el('h2', labels[report.reason] || 'Question report', card);
    el('p', [item.curriculum, item.level, item.subject, item.code, item.topic,
      item.part ? 'Part ' + item.part : '', 'Question ' + item.questionNumber,
    ].filter(Boolean).join(' · '), card, 'meta');
    el('p', '#' + report.id + ' · ' + new Date(report.created_at).toLocaleString(), card, 'meta');
    el('p', item.question || '', card);
    if (item.options?.length) {
      const choices = el('ol', '', card);
      item.options.forEach(option => el('li', option, choices));
    }
    if (item.expectedAnswer) el('p', 'Answer shown in quiz: ' + item.expectedAnswer, card);
    if (item.image) el('p', 'Quiz image: ' + item.image, card, 'meta');
    if (report.details) el('p', 'Student note: ' + report.details, card);
    const controls = el('div', '', card, 'report-actions');
    const action = el('button', report.status === 'open' ? 'Mark resolved' : 'Reopen report', controls);
    action.type = 'button';
    action.addEventListener('click', async () => {
      action.disabled = true;
      try {
        await request('', { method: 'PATCH', body: JSON.stringify({
          id: report.id, status: report.status === 'open' ? 'resolved' : 'open',
        }) });
        card.remove();
        message(report.status === 'open' ? 'Report marked resolved.' : 'Report reopened.');
      } catch (error) {
        message(error.message, true);
      } finally {
        action.disabled = false;
      }
    });
  }

  async function load(append) {
    if (busy) return;
    busy = true;
    more.disabled = true;
    message('Loading reports…');
    if (!append) {
      list.replaceChildren();
      next = null;
      loadedFilter = filter.value;
      more.hidden = true;
    }
    try {
      const params = new URLSearchParams({ status: loadedFilter });
      if (append && next) params.set('before', next);
      const data = await request('?' + params);
      data.reports.forEach(render);
      next = data.next;
      more.hidden = !next;
      message(list.children.length ? '' : 'No ' + loadedFilter + ' reports.');
    } catch (error) {
      message(error.message, true);
    } finally {
      busy = false;
      more.disabled = false;
    }
  }

  form.addEventListener('submit', event => { event.preventDefault(); load(false); });
  more.addEventListener('click', () => load(true));
})();
