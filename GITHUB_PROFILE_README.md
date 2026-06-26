# Shabbir Hussain

Senior SDE at Amazon working across AI infrastructure, ML systems, cloud platforms, and research-grade evaluation.

[Portfolio](https://hussain-s.github.io) · [GitHub](https://github.com/hussain-s) · [LinkedIn](https://www.linkedin.com/in/72shabbir/) · [Email](mailto:72.shabbir@gmail.com)

---

## Research Focus

I work on the systems layer around modern AI: how model behavior changes under realistic information timing, when retrieval adds measurable value, and how telemetry makes distributed AI systems easier to diagnose.

Current areas:

- **LLM evaluation:** delayed information, premature commitment, recovery behavior, and decision stability.
- **Retrieval systems:** RAG value measurement, BM25 and dense retrieval baselines, reranking, and evidence-quality analysis.
- **Cloud-native AIOps:** decentralized root-cause analysis for microservices using anomaly signals, service graphs, gossip, and Personalized PageRank.
- **AI systems infrastructure:** reproducible runners, batch evaluation pipelines, telemetry, S3 checkpoints, and deployment scaffolding.

## Selected Work

| Area | Project | What it studies |
| --- | --- | --- |
| LLM evaluation | [LatencyBench](https://github.com/Haricharanpanjwani/llm_eval_robustness_latencybench) | How delayed task-critical information changes model behavior across waiting, premature commitment, and recovery. |
| Retrieval systems | [Retrieval Value Maps](https://github.com/hussain-s/rag-value-map) | When retrieval helps, hurts, or wastes compute on public-knowledge question answering tasks. |
| Cloud-native AIOps | [Swarm RCA for Microservices](https://github.com/Haricharanpanjwani/ai_ops_swarm_intelligence) | Distributed and centralized RCA over microservice telemetry using graph-based ranking. |
| AI systems writing | [Designing AI Systems](https://github.com/hussain-s/Design-AI-System) | Practical system design material for building, evaluating, and operating AI applications. |

## Research Taste

I am interested in work that produces measurable behavior, not only compelling demos. The projects I value most usually have:

- a clear failure mode or measurement question;
- a reproducible experimental path;
- enough infrastructure to run beyond toy examples;
- analysis that helps another engineer or researcher challenge the result.

## Technical Surface

**Languages:** Python, TypeScript, SQL, Bash  
**AI systems:** LLM evaluation, RAG, reranking, prompt pipelines, model-judge workflows  
**Infrastructure:** AWS, Kubernetes, Docker, S3, CloudWatch, X-Ray, Terraform  
**Data and evaluation:** batch inference, dataset preparation, scoring pipelines, retrieval indexes  
**Engineering:** reproducible CLIs, testable workers, telemetry, CI, release hygiene

## What I Am Building Toward

I want my work to sit at the boundary of research and deployable systems: rigorous enough for serious review, but practical enough that another engineer can run, inspect, and extend it.
