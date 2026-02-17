
2

Automatic Zoom
 
 
 
 
 
 
 Semester Project  
Porting OpenCCA to new Arm Boards and 
improving device driver support  
 
Description Confidential  computing  is  becoming  increasingly  important  across  modern  processor 
architectures,  with  Intel  TDX,  AMD  SEV-SNP,  and  Arm  CCA  each  offering  confidential 
execution  environments. However, unlike Intel and AMD, research into Arm’s Confidential 
Compute Architecture (CCA) is significantly hindered by the lack of hardware support. As a 
result, researchers are forced to rely on ISA-level emulators, which are slow and only support 
a limited set of peripherals. To address these challenges, we are building OpenCCA: an open 
research platform enabling the execution of CCA-bound confidential workloads on existing, 
commodity  Armv8.2  hardware.  OpenCCA  emulates  the  essential  features  of  Arm  CCA  in 
software,  allowing  general-purpose  confidential  virtual  machines  to  run  with  minimal 
modification to the firmware stack. While it does not provide the security guarantees of real 
CCA  hardware,  it  offers  a  practical  alternative  to  simulation,  ideal  for  prototyping  and 
early-stage  research.  We  already  have  a  prototype  capable  of  running  unmodified  guest 
VMs, but there are more open problems and engineering challenges waiting to be tackled. 
 
In this project, we extend OpenCCA beyond its current platform by porting it to additional, 
widely  used  development  boards.  The  goal  is  to  turn  OpenCCA  into  a  more  portable, 
reproducible  research  platform.  This  work  involves  low-level  bring-up  of  SoCs  (firmware, 
Linux, drivers, device trees) and systematic validation so confidential VMs run reliably across 
these  targets.  You  will  gain  hands-on  experience  in  low-level  firmware  and  software 
engineering and deepen your understanding of virtualization security and Linux. 
 
https://opencca.github.io/ 
Requirements: 
●  Independent and research-driven mindset 
●  Strong interest in hypervisors, security, and virtualization 
●  Proficiency in C and experience with Linux kernel or firmware development 
●  Ideally, you have taken courses like Hardware Security and Advanced Operating 
Systems. 
Requirements to apply: 
If you’re interested, please reach out. Include a link to your GitHub profile with an 
open-source project you’ve worked on, and highlight a piece of code you have written that 
you’re particularly proud of, and why you are proud of it. 
Andrin Bertschi 
andrin.bertschi@inf.ethz.ch 
 
Date: December 2025 
