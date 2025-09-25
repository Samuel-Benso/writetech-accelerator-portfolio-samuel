# LLaMA 2 overview

## Overview

LLaMA 2 is Meta's open-source large language model (LLM). It is available in multiple sizes to balance quality and compute cost.

### Model sizes
- **7B** parameters (≈13 GB VRAM)
- **13B** parameters (≈25 GB VRAM)
- **70B** parameters (≈140 GB VRAM)

## Features
- Uses grouped-query attention for efficient inference
- Supports a 4K token context window
- Optimized for English with multilingual support
- Allows commercial use under license terms

## Performance

The following benchmarks are indicative and vary by evaluation setup.

| Task | 7B | 13B | 70B |
|------|----|-----|-----|
| Reading (MMLU) | 45.3 | 54.8 | 68.9 |
| Math (GSM8K) | 14.6 | 28.7 | 56.8 |
| Code (HumanEval) | 12.8 | 18.3 | 29.9 |

## Safety
- Apply supervised fine-tuning and human feedback alignment (RLHF) where applicable
- Use input/output filtering to reduce unsafe content
- Test safety behaviors before production use
- Evaluate bias and factuality regularly
- Require human oversight for high-stakes use cases
- Publish user guidelines and acceptable use policies

## Monitor and evaluate

Track the following to maintain quality over time:

- **Quality**: factual accuracy, correctness on domain tasks
- **Bias and safety**: bias across groups, unsafe content rate, classifier precision/recall
- **User signals**: satisfaction, issue reports, escalation rates
- **Performance**: latency, throughput, cost per 1K tokens
- **Compliance**: adherence to usage and data policies
