# Amrita Kadam — Portfolio

Source for my personal portfolio: **[amrita-kadam.vercel.app](https://amrita-kadam.vercel.app)**

Final-year B.Tech CSE student at IIIT Raichur (graduating August 2027), working on LLM hallucination detection, evaluation and multi-agent systems. Open to Applied Scientist and AI/ML research internships of about six months, starting now or from January 2027.

- GitHub: [github.com/Amrita0205](https://github.com/Amrita0205)
- LinkedIn: [linkedin.com/in/amrita-kadam-2a293b287](https://www.linkedin.com/in/amrita-kadam-2a293b287)
- Email: amrita0205kadam@gmail.com
- Resume: [`src/assets/Resume.pdf`](src/assets/Resume.pdf) (LaTeX source: [`resume/Resume.tex`](resume/Resume.tex))

## Experience

| Role | Company | Dates |
|---|---|---|
| Mechanistic Interpretability Research Intern | Moleculyst (remote) | Jul 2026 – Aug 2026 |
| Backend Developer Intern | TerraBiz (remote) | Feb 2025 – Aug 2025 |

At Moleculyst I reproduced the MultiHaluDet hallucination-detection method and extended it to more open models (see the first project below). At TerraBiz I built and deployed production REST APIs in Node.js and Express.js, and reduced query latency by restructuring MongoDB schemas and adding targeted indexes.

## Projects

### Featured

**MultiHaluDet — Reproduction and Multi-Model Extension** · [Code](https://github.com/Amrita0205/multihaludet-reproduction)
- Reproduced MultiHaluDet (ACL 2026 workshop), which detects LLM hallucinations by probing a frozen model's hidden states: matched its HaluEval result on Mistral-7B (AUROC 0.985 vs. 0.984 reported), then extended it to Qwen2.5-7B, Phi-3.5-mini and Yi-1.5-9B. All four scored 0.985–0.989.
- Found a validation bug in the released code: a cross-validation seed collision inverted the meta-learner's predictions; decorrelating the folds restored out-of-fold AUROC from 0.41 to 0.98.
- Wrote a GPU meta-learner that trains in 51 s vs. ~50 min for the original ensemble.
- Stack: Python, PyTorch, Hugging Face Transformers, scikit-learn

**Veda AI — Assessment Extraction and Answer Mapping** (2026) · [Code](https://github.com/Amrita0205/Extraction-and-Answer-Mapping-Veda-AI) · [Live](https://extraction-and-answer-mapping-veda-nine.vercel.app)
- Deployed vision-LLM pipeline that reads a printed question paper and a handwritten answer sheet, maps each answer to its question, highlights its ink and grades it.
- Fixed a silent failure in box detection: overlap went from IoU 0.29 to 0.89, and page extraction latency from 176 s to 2.2 s.
- pytest ground-truth harness and a 14-subject evaluation sweep.
- Stack: Python, FastAPI, Gemini, Next.js, pytest

**Agentic AI Career Advisor** (Nov 2025) · [Code](https://github.com/anandn1/career-advisor) · [Demo](https://youtu.be/56Xtd1PNetw)
- Team of four. I wrote the supervisor that orchestrates the LangGraph agents (job-market analysis, skill-gap detection, resume strategy, mock interviews, learning paths).
- Advice grounded with RAG over ChromaDB; selected by IIIT Dharwad faculty for research collaboration.
- Stack: Python, LangGraph, LangChain, ChromaDB, PostgreSQL, Groq

**Blog Writing Agent — Multi-Agent Content Pipeline** (2026) · [Code](https://github.com/Amrita0205/Blog_writing_AI_agent)
- Four CrewAI agents (Researcher, Writer, Editor, Social) producing a publication-ready post plus platform variants on Groq llama-3.3-70b.
- Stack: Python, CrewAI, Groq, litellm

### Other projects

| Project | What it is | Links |
|---|---|---|
| **Bit Lens — Bitcoin Transaction Analyser** | Summer of Bitcoin 2026 developer challenge, week 1: CLI that emits machine-checkable JSON, plus a web visualiser. | [Code](https://github.com/Amrita0205/Summer-of-Bitcoin-week1-BIT-LENS-challenge) · [Demo](https://www.youtube.com/watch?v=arhDI3FLk-4) |
| **Coin Smith — PSBT Transaction Builder** | Summer of Bitcoin 2026 developer challenge, week 2: BIP-174 PSBT builder with greedy coin selection and dust-safe change. | [Code](https://github.com/Amrita0205/Summer-of-Bitcoin-week2-COIN-SMITH-challenge) · [Demo](https://www.youtube.com/watch?v=UiFWWvqCxC4) |

## Built with

React, TypeScript, Vite, Tailwind CSS, shadcn/ui and Framer Motion. Deployed on Vercel.

```sh
npm install
npm run dev     # local development
npm run build   # production build
```

## Keeping things in sync

The site's experience, projects and skills match the resume word for word.

1. Edit `resume/Resume.tex` (compiles with pdfLaTeX on Overleaf; uses XCharter when available, otherwise Charter).
2. Replace `src/assets/Resume.pdf` with the compiled PDF.
3. Update `src/components/Experience.tsx`, `src/components/Projects.tsx`, `src/components/Skills.tsx` and this README if any wording changed.
