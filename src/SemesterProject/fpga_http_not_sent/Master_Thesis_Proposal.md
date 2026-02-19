

# FPGA-Accelerated HTTP Server for LLM Inference

Yu Zhu and Gustavo Alonso

Autumn 2025

## 1 Thesis Description

Large language model (LLM) inference systems, such as vLLM [1] and SGLang [2], are increasingly deployed as cloud-based services where user queries are submitted as HTTP requests. In such systems, the GPU is the primary accelerator for model execution, but the front-end request handling pipeline—typically implemented on CPUs—can quickly become a bottleneck. In particular, the HTTP server on the CPU must parse, schedule, and forward requests to the GPU, leading to high latency and wasted CPU cycles when serving large-scale workloads. This mismatch leaves the GPU underutilized, despite its ability to sustain high throughput.

To address this bottleneck, we propose to investigate FPGA-based HTTP servers to offload request handling and enable FPGA-GPU co-design for LLM inference. Recent work has demonstrated that FPGA-based HTTP servers can achieve both high throughput and ultra-low latency. For instance, STREGA sustains 1.7M HTTP requests per second with end-to-end latency as low as  $16\ \mu\text{s}$ , significantly outperforming state-of-the-art CPU-based solutions such as nginx running on 32 vCPUs [3]. By directly attaching FPGAs to the network, the HTTP parsing and request scheduling tasks can bypass CPU involvement, thus reducing overhead and improving determinism.

The goal of this thesis is to design and evaluate an FPGA-based HTTP front-end for LLM inference workloads. Specifically, we will (i) implement a lightweight HTTP parsing and scheduling layer on FPGA that interfaces directly with GPUs, (ii) analyze the performance gains in terms of latency, throughput, and GPU utilization, and (iii) explore co-design opportunities where FPGA pre-processing (e.g., batching or request prioritization) complements GPU execution. This approach builds upon ongoing research in FPGA-as-a-Service and FPGA-based microservices, while uniquely targeting

the LLM inference domain where the request-to-response pipeline is latency-sensitive.

By integrating FPGA-based HTTP handling with GPU inference execution, this thesis aims to demonstrate a more balanced resource utilization across heterogeneous accelerators and enable scalable deployment of LLM services with reduced CPU overhead.

## 2 Contact

Please reach out to Yu Zhu ([yu.zhu@inf.ethz.ch](mailto:yu.zhu@inf.ethz.ch)) if you are interested in the project. We can schedule a meeting to explain the project in more details.

## References

- [1] Woosuk Kwon, Zhuohan Li, Siyuan Zhuang, Ying Sheng, Lianmin Zheng, Cody Hao Yu, Joseph E. Gonzalez, Hao Zhang, and Ion Stoica. Efficient memory management for large language model serving with pagedattention. In *Proceedings of the 29th ACM Symposium on Operating Systems Principles (SOSP)*, 2023.
- [2] Lianmin Zheng, Liangsheng Yin, Zhiqiang Xie, Chuyue Sun, Jeff Huang, Cody Hao Yu, Shiyi Cao, Christos Kozyrakis, Ion Stoica, Joseph E. Gonzalez, Clark Barrett, and Ying Sheng. Sglang: Efficient execution of structured language model programs. *arXiv preprint arXiv:2312.07104*, 2023.
- [3] Fabio Maschi and Gustavo Alonso. Strega: An http server for fpgas. *ACM Transactions on Reconfigurable Technology and Systems*, 17(1):1–27, 2024.