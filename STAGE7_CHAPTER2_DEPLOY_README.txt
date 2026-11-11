TopicalExamQuiz – Stage 7 (Year 7) Science Chapter 2 integration
===============================================================

WHAT IS INCLUDED
----------------
Stage 7 > Science > Chemistry > Chapter 2: Materials and their structure.
  2.1 Solids, Liquids and Gases                      20 questions
  2.2 Changes of State                              20 questions
  2.3 Explaining Changes of State                   20 questions
  2.4 The Water Cycle                               20 questions
  2.5 Atoms, Elements and the Periodic Table        20 questions
  2.6 Compounds and Formulae                        20 questions
  2.7 Compounds and Mixtures                        20 questions

Total: 140 questions; includes 12 fill-in-the-blank and 15 diagram-based MCQs.
All other questions are multiple-choice (as provided in the workbook).
Each subtopic has Part 1 (7 questions), Part 2 (7 questions), Part 3 (6 questions), following the Excel's pre-assigned parts. Chapter 2's diagrams appear inside the normal quiz questions, not as a separate image quiz.
Seven local diagram files are under science-chapter2-diagrams/.
All diagram files are PNG under 100 KB.

INTEGRATION
-----------
- index.html: loads stage7-science-chapter2-questions.js and assigns its 7 topic data banks into stage7ScienceQuestions; the mixed-part splitter preserves provided 7/7/6 part assignments for these questions.
- stage7-science-chapter2-questions.js: all 140 questions, answer keys, explanations, and image URLs from the supplied workbook.
- science-chapter2-diagrams/: 7 diagrams supplied in the question package.
- The existing Chinese HSK 3 Lessons 1–6, Science Chapter 1, progress tracking, study guides, and teacher mockup remain included from the latest integrated website files.
- The original Stage 7 Chapter 2 sample question pools are REPLACED by the uploaded 140-question set for these seven topic keys, not duplicated.

HOW TO USE
----------
Upload/deploy the contents of this ZIP to the site's Vercel static site, with index.html at the root.
At the site, open:
  Learn > Lower Secondary / Stage 7 > Science > Chemistry > Chapter 2 > topic 2.1–2.7 > Parts 1–3.

VERIFY IN THE BROWSER BEFORE GOING LIVE
---------------------------------------
1. Check each of the seven Chapter 2 topic cards opens Parts 1, 2 and 3 with 7, 7 and 6 questions.
2. Check diagram questions display the correct local images; test 2.1, 2.4, and 2.7.
3. Answer a multiple-choice, a diagram question and a fill-in-the-blank question; confirm correct-answer scoring and explanation.
4. Finish all three Parts in one subtopic and verify the Review feature unlocks.
5. Verify HSK 3, Chapter 1 Science, teacher preview and student progress still work as expected.
6. Test both desktop and mobile.

VALIDATION PERFORMED
--------------------
- Excel imported and mapped by topic and Part (7 topics × 20 questions).
- All answer keys and 15 photo references structurally validated.
- Both the main inline website scripts and the new JS dataset passed Node syntax check.
- Node data and Part tests passed.
- Automated full browser interaction did not complete in this environment, so human/browser QA is still required.

IMPORTANT
---------
This ZIP is an updated WEBSITE FILE PACKAGE, not a live deployment.
Any learner progress captured in the static version is browser-local and not centrally synced to a backend.
