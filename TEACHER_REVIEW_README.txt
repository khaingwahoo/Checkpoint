TopicalExamQuiz — Teacher Detailed Wrong Answers Demo

How to test the interface:
1. Extract ZIP, preserving quiz-images folder beside index.html.
2. Open index.html in a browser.
3. Open Teacher Login and enter the demo Teacher Dashboard.
4. Open Class 7A, click Wrong answers beside Emma, Daniel, Mia or Noah.
5. Review the sample student response, correct answer, explanation, and relevant science diagram.
6. Use status filter, search, and Export CSV.

How to test newly captured attempts (same browser):
1. Take a quiz in the student preview and deliberately answer some questions incorrectly.
2. Complete the quiz and reach the summary screen (question-level answers are saved on completion).
3. The student ID is displayed in the Student Profile. Add this Student ID to a teacher class.
4. Open Teacher Dashboard -> class -> Wrong answers for that student.

Notes for the developer:
- Demo student profiles and sample incorrect responses are fictitious and clearly labelled.
- Question-level responses attach to study reports in localStorage topicalExamQuizStudentActivityV1.
- Records cover MCQ, fill-in-the-blank, rearrangement and image quizzes, with attempt time.
- The teacher review is a front-end prototype. A production site MUST implement account login, verified class membership, role-based authorization, cross-device database storage, limited access to children's data and retention controls.
- Earlier attempts from before this revision only have aggregate scores; per-question detail cannot be reconstructed.
- Image quiz files are WebP, each under 100 KB.
