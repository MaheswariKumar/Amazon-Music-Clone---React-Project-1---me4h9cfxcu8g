import React, { useState, useEffect, useRef, useReducer, Component } from "react";

function Subscription(){
    return (
        <div className="sub">
            <div className="subback">
                <div className="imgpri">
                    <img className="logo" src="https://d5fx445wy2wpk.cloudfront.net/static/logo.svg"></img>
                    <nav>Pricing</nav>
                </div>
                <div className="limit">
                    <nav>UNLIMITED</nav>
                </div>
                <div className="cards-sub">
                    <div className="sub1">
                        <h1>Individual</h1>
                        <nav>non-Prime Members</nav>
                        <nav>$9.99</nav>
                        <nav>per month</nav>
                    </div>
                    <div className="sub2">
                        <h1>Individual</h1>
                        <nav>Prime Members</nav>
                        <nav>$7.99</nav>
                        <nav>per month</nav>
                    </div>
                    <div className="sub3">
                        <h1>Family</h1>
                        <nav>Prime Members</nav>
                        <nav>$14.99</nav>
                        <nav>per month</nav>
                    </div>
                    <div className="sub4">
                        <h1>Students</h1>
                        <nav></nav>
                        <nav>$4.99</nav>
                        <nav>per month</nav>
                    </div>
                </div>

            </div>
            <div className="img-more">
                <img src="https://d3dyfaf3iutrxo.cloudfront.net/file/editor/image/840d3c012f4847aba313ce82f354429c.png"></img>
            </div>

        </div>
    )
}

export default Subscription;