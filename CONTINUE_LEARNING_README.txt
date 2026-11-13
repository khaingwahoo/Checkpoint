TopicalExamQuiz - Continue Learning update (13 November 2026)
============================================================

WHAT WAS ADDED
- A prominent 'Continue Learning' card at the top of the homepage, visible after
  a learner opens a practice topic/lesson.
- A 'Continue Learning' shortcut in the main navigation.
- Automatic bookmarking of the most recently opened three-part practice topic:
  learning path, level, subject, topic/lesson, Part, question count, in-session
  answers, score, and mastery.
- On return to the same browser, a click on Continue Learning opens that topic
  directly, resumes an unfinished Part after previously answered questions,
  or opens the next unfinished Part after one has been completed.
- Once all three Parts are complete, the shortcut opens the lesson overview,
  where the existing Review button is available.
- Works with HSK 3 Lessons 1-6, Stage 7 Science topics (including Chapter 2),
  existing HSK sample chapter parts, and Myanmar sample topics.

IMPLEMENTATION AND LIMITATIONS
- Bookmark key: localStorage.topicalExamQuizContinueLearningV1.
- Existing part completion data remains in topicalExamQuizPartProgressV1.
- Data is saved in this browser/device only. There is no true account sync,
  verified login integration, or server-side progress storage in this static
  demo. For production and multi-user shared devices, migrate progress to
  authenticated, per-student database records and reset/switch browser data
  appropriately when students switch accounts.
- Quiz answers are saved after checking an answer; partially typed unsubmitted
  answers and unsubmitted word ordering are not saved.
- When a submitted answer is restored, the next unanswered question is shown.
- A change to question banks invalidates incompatible in-progress snapshots.
- Only practice parts are resumable; random daily/mistake/review quizzes are not.

LOCAL CHECKS
- All inline scripts pass node --check (JavaScript syntax check).
- Original site image and question assets remain in the ZIP.
- Browser click-through tests could not run in this environment because
  the local Chromium browser blocks opening both file:// and localhost URLs.
  Please test in browser after deploying to a staging site.

RECOMMENDED TESTS BEFORE PRODUCTION
1. New browser: no Continue Learning shortcut before visiting a practice topic.
2. Open HSK 3 Lesson 1 Part 1, answer a question, reload, Continue Learning:
   answer count, score and next unanswered question persist.
3. Finish Part 1, reload: Continue Learning should start Part 2.
4. Repeat for Stage 7 Science Chapter 2 and Myanmar sample subjects.
5. Complete Parts 1-3, reload: Continue Learning opens the review-ready overview.
6. Check mobile layout, different browsers, clear storage, student logout,
   multiple student accounts and existing progress handling.

DEPLOYMENT
This ZIP is a static website update. It does NOT update the live Vercel site.
Deploy the contents to the existing website project after review.
