TOPICALEXAMQUIZ — ADSENSE PRE-LAUNCH PACKAGE (5 November 2026)

MAIN FILE: index.html — previous website with quizzes, signup/login demos, HSK chapter pages and Myanmar sample practice retained.

UPDATES:
- Removed all 9 empty "Google Ads space" blocks. These were not paying ads and may confuse visitors.
- Added metadata/title and static, crawlable information and science study-guide pages.
- Improved homepage educational resources and removed premature claims that samples were already expert-reviewed.
- Replaced non-working Contact form with a truthful preview message (no fake submissions).
- Revised prototype privacy disclosures (AdSense not enabled; local browser accounts not production-secure).
- Made footer links to public information and guide pages.
- Added draft robots.txt and sitemap.xml referencing the PLANNED domain.
- Retained all existing quiz, HSK, Myanmar, student/teacher, and UI JavaScript.

BEFORE PUBLIC LAUNCH:
1. Buy topicalexamquiz.com, connect BOTH www.topicalexamquiz.com and topicalexamquiz.com to Vercel (Project > Settings > Domains). Use the exact DNS records shown in Vercel; set www as canonical and redirect the root domain to www.
2. Upload all package files TOGETHER to the website public root. Preserve filenames and relative hyperlinks; for an existing Vercel/Git project, merge these files into its public/static deployment structure rather than replacing the whole project blindly.
3. Confirm canonical domain is live before submitting the provided sitemap to Google Search Console; until then, do not submit sitemap.xml referencing a domain you don't yet control.
4. Add a monitored contact email or genuinely operational contact form. Update contact.html, privacy.html, and the in-app Contact view.
5. Implement secure server-side authentication (such as Supabase Auth) for actual signup/login and password recovery. The static demo must NOT be presented as secure real accounts.
6. Verify/edit all scientific questions, remove duplicates, and complete each user-visible lesson; sample placeholder topics are not official textbooks.
7. Publish accurate privacy/cookie policy for real services, consent management as legally required, and child-directed advertising protections. AdSense does not currently list Burmese as a supported content language: do not automatically load ad code globally across Burmese-majority pages.
8. Only after you have an approved Google AdSense publisher account and a READY site: add the official AdSense verification / ad script to eligible pages with appropriate consent, age and language checks. DO NOT globally insert auto ads into this SPA without establishing proper content segmentation and child-protection controls. There is deliberately no publisher ID, ads.txt, or live ad code in this package.
9. After approval, create ads.txt with the exact publisher ID provided by AdSense and add appropriate entries at the website root. Do not invent an ID.
10. Test all site routes, especially mobile, login/signup, all buttons, and quiz navigation, in a browser. This package passed static validation but not full end-to-end browser testing.

Important: This package reduces some approval risks but does not guarantee approval. A single-page app with hidden content states is less ideal for SEO than individually routable lesson pages; a future rebuild can expose each quiz and chapter at its own indexable URL.

DEVELOPER MOCK QUIZ SECTION (5 November 2026):
The homepage now displays three clearly labelled sample-quiz entry points. Stage 7 Science leads to Biology topics; Chinese HSK 1 leads to its sample chapter chooser; Myanmar Year 7 Science leads to the sample quiz topics. These preserve pre-launch AdSense improvements, and should not be mistaken for curriculum-verified learning material.
