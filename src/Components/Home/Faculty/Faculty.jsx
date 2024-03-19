import React, { useEffect, useRef } from 'react';
import './Faculty.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Faculty = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const elements = document.querySelectorAll('.circle-number');

        elements.forEach((element, index) => {
            let initialValue;
            switch (index) {
                case 0:
                    initialValue = 30;
                    break;
                case 1:
                    initialValue = 45;
                    break;
                case 2:
                    initialValue = 25;
                    break;
                case 3:
                    initialValue = 8;
                    break;
                default:
                    initialValue = 0;
            }
            element.innerText = initialValue;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: element,
                    start: 'top center',
                    end: 'bottom center',
                    scrub: 0.1,
                    onUpdate: (self) => {
                        const progress = Math.round(self.progress * initialValue);
                        element.innerText = progress;
                    }
                }
            });
        });
    }, []);

    return (
        <div className="facilities">
            <div className="facility">
                <div className="circle-number">0</div>
                <p>Teachers</p>
            </div>
            <div className="facility">
                <div className="circle-number">0</div>
                <p>Classrooms</p>
            </div>
            <div className="facility">
                <div className="circle-number">0</div>
                <p>Activities</p>
            </div>
            <div className="facility">
                <div className="circle-number">0</div>
                <p>Computer Labs</p>
            </div>
        </div>
    );
};

export default Faculty;
