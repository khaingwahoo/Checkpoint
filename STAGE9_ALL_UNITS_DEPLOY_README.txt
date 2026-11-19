Topical Exam Quiz — Stage 9 Science: complete difficulty update
=============================================================
Base: Checkpoint_Stage9_Unit4_Difficult_Updated.zip.
This release adds 330 Difficult questions from Units 5–9. Previous Stage 9
questions and all non-Stage 9 site files are retained. The old JS filename
is kept to match the existing index.html script tag.

TOTALS
Unit   Easy   Medium   Difficult   Total
1        96       79          84     259
2       121      148          77     346
3       162      175         107     444
4       126      107          73     306
5       149      137          89     375
6       153      133          89     375
7       119      109          78     306
8       114      115          77     306
9       114      120          72     306
Total  1154     1123         746    3023
40 subtopics, 120 difficulty groups, Parts 1/2/3 = Easy/Medium/Difficult.
126 original PNGs are bundled, including 22 newly imported from Units 5–9.
New diagrams for Units 8 and 9 are square. All bundled PNGs are under 150 KB.
630 image references: 391 have local PNGs, with R2 links retained as fallback.
Other pre-existing image links are retained and their remote loading is unverified.

DEPLOY
1. Back up the GitHub repository or create a branch. If there are newer live
   changes, merge rather than overwrite them.
2. Extract the complete archive. For this incremental release, replace
   stage9-science-unit1-questions.js and upload the complete stage9-images/
   directory with its subfolders intact. index.html is unchanged and is
   provided in the complete archive. The deployment README and corrections
   log are documentation only.
3. Commit and test the Vercel preview before deploying to production.
4. Cloudflare uploads are optional for the bundled diagrams to display on the
   site. The existing R2 URLs remain fallback links. This package does not
   upload anything to Cloudflare or GitHub.

VALIDATION AND LIMITATIONS
Question counts, unique positions, grouping, answer structure, local file
paths, PNG decoding and JS syntax (including inline scripts) were checked.
All previous source files other than the Stage 9 data and updated README
remain byte-identical. Full browser tests could not be completed because
navigation is blocked by the testing environment. Test quiz scoring,
Continue Learning, account/dashboard views and remote images on preview.
Nine Unit 8 graph/measurement prompts were clarified or corrected at import.
See STAGE9_UNIT8_IMPORT_CORRECTIONS.json for revised prompts, options,
answers, explanations and the exact topic/part/position. Source Excel files
were not modified; apply these corrections if re-importing Unit 8 later.
Difficulty labels are editorial estimates, not official Cambridge ratings.
Old completed Easy and Medium groups retain their counts; the enlarged
Difficult groups may require students to complete them again, because the
existing completion check requires the saved total to match the current
question count. Prior attempt history is not erased by this package.
