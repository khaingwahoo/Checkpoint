TOPICALEXAMQUIZ — HSK 3 LESSONS 1–6 INTEGRATION
================================================
Updated: 11 November 2026

WHAT WAS ADDED
- Existing HSK 3 Lesson 1 retained (120 practice questions, 15 compressed JPGs).
- Lessons 2, 3, 4, 5 and 6 now have 120 questions and 15 JPGs per lesson.
- TOTAL: 720 questions, 90 local JPGs (30 image questions per lesson, using each image twice).
- Navigation: Chinese Language > HSK > HSK 3 > Lessons 1–6.
- Every lesson uses the website's existing Part 1 / Part 2 / Part 3 format.
- Each part contains 40 mixed questions (10 MCQ, 10 fill, 10 rearrange, 10 image MCQ).
- The questions are NOT split into separate question-type pages. Each picture appears with its question and answer choices.
- Correct answers/explanations, per-part completion, the 20-question review, and the existing teacher demo mistake records use the same site quiz engine.

FILES TO DEPLOY TOGETHER
- index.html (updated navigation + lesson routing)
- hsk3-lesson1-questions.js (existing Lesson 1)
- hsk3-lessons2-6-questions.js (NEW Lessons 2–6)
- hsk3-lesson1-images/ (existing 15 Lesson 1 images)
- hsk3-lesson-images/ (NEW 75 Lesson 2–6 JPGs)
- all other website files preserved from the provided website ZIP

DEPLOYMENT
This deliverable is an updated WEBSITE ZIP. It is NOT automatically uploaded to Vercel or your live domain.
If your Vercel website uses a Git repository, merge these updates into the deployed source / public static directory and deploy the project. Do not overwrite newer backend changes, database code, or authentication logic.

LIMITATIONS AND REVIEW
- Quiz content is in static JS files and progress is saved per device/browser via localStorage. This does NOT provide shared student records, server-side authentication or a production teacher dashboard.
- Five incomplete Lesson 6 sentence-ordering questions from the supplied data referenced a missing option E. We restored only their missing word tiles from the supplied answer explanations (source question numbers 7, 27, 51, 115, 119), to make them answerable. Please proofread these five before release.
- Complete an educational proofread and confirm all picture-question interpretations before publishing.
- Maintain relative JS and image file paths; changing them will break lesson loading or images.
- Use a new browser profile to test progress and review availability. Existing localStorage saved scores may remain for Lesson 1, and are not reset.
- Other course and Myanmar/Cambridge content remains unchanged.
