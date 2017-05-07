---
title: "A Mobile Structured Light System for 3D Face Acquisition"
excerpt: "An interesting project to develop a portable high definition 3D face scanner<br/><img src='/images/Marco_cropped.png'>"
collection: portfolio
use_math: true
---

About the project 
================

In late 2012 I was asked to design a portable system able to scan human faces for border control.
At that time The Microsoft Kinect was dominating the field of the 3D acquisition devices, and in a very short time they sold more than 2 million devices.
Unfortunately Microsoft Kinect v1/v2 is not that friendly for very mobile applications, and more portable solutions, like project Tango, or sensor io were still in a sperimental stage.
After 5 years the scene is totally different, with [dozen of devices available](https://all3dp.com/1/best-3d-scanner-diy-handheld-app-software/).
We were able to design an active stereo system composed of a mid-range smartphone, and a pico-projector, driven by an Android App that we wrote for the acquisition and 3D reconstruction.
In Spring 2013 The [CiTer](https://citer.clarkson.edu/) approved our project with a grant, and we deliver the outcomes in Spring 2014 at the CiTer Spring meeting at SUNY BUffalo (NY).
In that occasion we made a short demo about the device.
In 2016 our work was published on the [IEEE Sensor Journal](http://ieeexplore.ieee.org/document/7361976/).

---

Hardware Design
======
Since the device was targeted for biometric, in particular border control, portability, battery powered, speed, and accuracy were the driven factors.
For these reasons we excluded techniques based on multi views stereo that were giving good results on static objects [ICCV13](https://cvg.ethz.ch/mobile/LiveMetric3DReconstructionICCV2013.pdf). 
We decided to use active scanning techniques, based on the illumination of the subject with structured light. Pretty well known are the work of [Taubin](http://mesh.brown.edu/) at Brown University, and [Song Zhang](https://engineering.purdue.edu/ME/People/ptProfile?resource_id=117610) at Purdue.
However, if the smartphones camera were good enough, the main problem was to find a compact and portable light source.
Fortunately, a new kind of devices were starting to be available at reasonable price, and battery powered: the [nano, pico, and micro projectors}(http://www.projectorreviews.com/projector-categories/pico-pocket-projectors/).
For our complete setup we decided to use an Android smartphone: a mid-range device (Nexus 4) with Android JellyBean. Till Android Lollipop almost all the smartphone were capable to output the video signal from the charging port. After, with the advent of google chromecast they decided to exclude the video output, and now only a few devices can be connected through HDMI port.
However, right now there are smartphones and tablets with included pico projector.
Our prototype in figure was composed of the Nexus 4, fixed to the micro-projector by a common car holder, and connected via HDMI cable. Since the light from the micro projector can be too bright for the eye we decided to use an additional tele lens to avoid to be too close to the subject.
<img src='/images/100_4116_scaled.JPG'>

Active Stereo reconstruction
============================
The pico projector and the smartphone constitute an active stereo device, where, the pico projector substitute one of the camera in the stereo configuration.
This configuration permits to use the basic stereo formulation, but present some difficulties for calibrating the system, especially the pico projector.





Three Phase Structured Light
============================
When I started to study structured light for 3D active acquisition devices I was literally astonished to find so many parallel, and the same math, I was using a few years before in electrical communication. The same principle used in radar, sonar, and communication, the idea is transmit information (shape) from the source (object to scan) to the receiver, the camera.
Relying on an active light source to illuminate the subject makes the system robust to noise and external factors, like external illumination, and fast, as we'll see.
The information to acquire is the shape of the subject, in the form of x,y,z coordinate. Illuminating the subject with a light source of given phase, and receiving the distorted light with the camera is an analogous to radar systems.
The main difference is the frequency of the electromagnetic radiation used. Hundred, or thousand of MegaHertz in the case of the radar, 100 millions of Mhz for the visible light.  
With different operating frequencies, although the same basic formulation, different noise and nuisances are playing a major role in the system performance.

---

There have been many structured light works using different patterns. The three main typologies are: binary coded light striping, gray/color coded light striping, and phase Shifting.
The main difference regard the way the shape information is encoded in the trasmitted light (carrier).
The first two techniques modulate the amplitude of the light with discrete values, by coding the depth values following traditional grey or binary coding. 





Android SDK, NDK, OpenFramework
==============================

<img src='/images/Screenshot_2014-05-01-18-14-13.png'>


<img src='/images/Screenshot_2014-05-02-15-36-23_H.png'>


<img src='/images/Screenshot_2014-05-02-18-24-06.png'>
