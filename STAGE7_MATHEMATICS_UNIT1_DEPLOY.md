# TEQ Cambridge Stage 7 Mathematics — Unit 1 website source update

Base: previously supplied TopicalExamQuiz_Stage9_English_Unit1_Updated_Website.zip. This is a local developer package, NOT a live website deployment.

## Added
- Cambridge Lower Secondary → Stage 7 → Mathematics → Number → Unit 1: Integers → six subtopics.
- 540 questions in a new `stage7-mathematics-unit1-questions.js` file, 90 per subtopic: Easy 40, Medium 30, Difficult 20.
- Part 1/2/3 question flow using the existing TEQ question screens, answers, explanations, progress/session behavior and reporting.
- Six original images in `TEQ_Cam_Y7_Maths_Chapter1_Img/` served locally, so website preview works without R2 publishing.
- Original Excel workbook included in `developer-data/` for data import/review.

## Cloudflare R2
Expected R2 object keys: `TEQ_Cam_Y7_Maths_Chapter1_Img/<filename>` in the `cambridgesevenmaths` bucket. Use the publicly accessible custom domain or r2.dev address, NOT the r2.cloudflarestorage.com API endpoint as an image src. Upload image ZIP contents preserving names.

## Developer checklist
1. Deploy all website files together, retaining existing HSK/Science/English files.
2. Confirm Maths section and each subtopic displays 40 / 30 / 20 questions.
3. Verify MCQs, fill-in answers, scoring, explanation text, question reports, images and browser persistence.
4. Replace client-only demo storage with production backend where required; check payment, auth, teacher dashboards and reporting before going live.
5. Editorial/teacher review: questions are generated content and have not been independently subject-matter certified.
6. Note that this source archive predates possible later site revisions. Merge with newer production changes before deployment if applicable.

Known data flags: 0 blank MCQ choice fields detected.
Image filenames referenced: TEQ_Y7_Maths_Ch1_01_numberline.png, TEQ_Y7_Maths_Ch1_02_integer_multiplication.png, TEQ_Y7_Maths_Ch1_03_lcm.png, TEQ_Y7_Maths_Ch1_04_hcf.png, TEQ_Y7_Maths_Ch1_05_divisibility.png, TEQ_Y7_Maths_Ch1_06_square_root.png.
