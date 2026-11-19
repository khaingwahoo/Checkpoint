# Topical Exam Quiz website update

This package builds on the Stage 9 all-units release. It includes 2,350 Cambridge Year 7 Science questions across Units 1–9, grouped into 47 subtopics. Each subtopic has 15 easy, 15 medium and 20 difficult questions in Parts 1–3. The 93 Year 7 diagrams are served from the website and their original Cloudflare links are retained as fallbacks. The 3,023 Stage 9 Science questions and existing HSK and Myanmar quizzes are included.

The shared quiz screen displays **Report this question** before and after answering. Reports include the question and answer key for staff to inspect. Students choose a reason and can add a short note. The form does not ask for names, email addresses or student IDs.

## Merge and deploy

1. Merge these files into a branch of the existing website repository. Keep the existing Vercel project and merge any newer website changes. Deploy the API from the project's root `api/` directory and serve the HTML, JavaScript, CSS and image folders together.
2. Apply the SQL migration in `supabase/migrations/202611180001_teq_question_reports.sql` to a Supabase database for the site. Configure Vercel with the three server environment variables below. Keep the keys out of the repository and public client code.
3. Deploy a Vercel preview. Open **Lower Secondary → Stage 7 → Science**, choose a subtopic and start Part 1. Send a test report, then open `/review-question-reports.html` in a different browser session. Use the review key to find the report and mark it resolved.
4. Repeat with a Stage 9, HSK or Myanmar quiz if those routes have changed on the active website. Promote the tested branch to production.

| Vercel variable | Value |
| --- | --- |
| `TEQ_REPORTS_SUPABASE_URL` | Supabase project URL |
| `TEQ_REPORTS_SUPABASE_SECRET_KEY` | Server-only Supabase secret API key |
| `TEQ_REPORTS_REVIEW_TOKEN` | Random staff review key of at least 32 characters |

The review page lists open and resolved reports. The server requires the review key to read or change report status. Report submission does not require a demo student account. When storage is unavailable, the quiz shows a retry message and keeps the note in the form.

The old Year 7 placeholder banks have been replaced, including the Chapter 2 demo. The same topic keys are retained for the matching subtopics. Previously saved partial sessions may restart if the question set changed. New Year 7 diagrams do not require a separate Cloudflare upload.

The website archive includes the server function and migration. Deployment and storage configuration still have to be completed in the live project.

[Vercel Node.js functions](https://vercel.com/docs/functions/runtimes/node-js) · [Supabase API keys](https://supabase.com/docs/guides/getting-started/api-keys)
