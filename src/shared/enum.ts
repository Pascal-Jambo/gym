export enum SelectedPage{
    Home="home",
    Benefits="benefits",
    OurClasses="ourclasses",
    ContactUs="contactus",
}
export type BenefitType={
    icon:JSX.Element;
title:string;
description:string;
}
export type ClassesType={
name:string;
dscription:string;
image:string;
}