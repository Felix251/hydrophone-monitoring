import React from "react";
import PropTypes from "prop-types";
import { v1 as uuidv1 } from 'uuid';

//Thank you https://codepen.io/davidbanks/pen/rksLn

export default function Thermometer({
  width,
  height,
  steps,
  minValue,
  maxValue,
  currentValue,
  showGoalline,
  color,
}) {
  let tubeWidth = 21.5;
  const allsteps = [];
  // console.log('Max ', maxValue, 'MinVal ', minValue);
  const eachStepVal = (parseInt(maxValue) - parseInt(minValue)) / steps;
  //Y ranges from min = 295  max = 14
  const lengthOfTube = 295 - 34;
  const eachStepY = lengthOfTube / steps;
  const currentValueY =
    295 - (lengthOfTube * currentValue) / (maxValue - minValue);

  // console.log( currentValueY);
  let val, y;
  for (let i = 0; i <= steps; i++) {
    val = minValue + i * eachStepVal;
    y = 295 - eachStepY * i;
    allsteps.push({ val: val, y: y });
  }
  const uid = uuidv1();
  console.log( 'id ', uid);
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      width={width}
      height={height}
      viewBox="0, 0, 150, 400"
    >
      <defs>
        <clipPath id="cut-off-red">
          <rect x="38" y={currentValueY} width="600" height="500"></rect>
        </clipPath>
        <clipPath id="Clip_1">
          <path d="M21,-3.999 L130,-3.999 L130,405 L21,405 z M75.5,6 L77.95,6.12 C90.196,8.294 98.607,16.289 99.498,29.017 C99.454,29.947 99.472,29.497 99.443,30.369 C99.439,30.545 99.434,30.911 99.433,30.952 C99.429,31.083 99.44,31.023 99.277,31.792 L99.02,33 L99.5,33 L99.5,308.679 L99.968,308.973 C113.572,317.514 121.584,332.071 122,348.525 C122,374.181 101.181,395 75.5,395 C49.819,395 29,374.181 29,348.5 C29.086,332.244 36.94,318.493 51.06,308.955 L51.5,308.658 L51.5,33 L51.98,33 L51.723,31.792 C51.56,31.023 51.571,31.083 51.567,30.952 C51.565,30.911 51.56,30.545 51.556,30.369 C51.547,29.989 51.53,29.537 51.499,28.947 C51.5,16.307 62.236,6 75.5,6 z M75.548,4.001 C61.15,4 49.5,15.184 49.5,29 C49.531,29.623 49.548,30.057 49.557,30.417 C49.564,30.835 49.561,30.64 49.567,31 L49.5,31 L49.5,307.612 C35.987,317.262 26.989,331.539 27,348.495 C27,375.286 48.714,397 75.5,397 C102.286,397 124,375.286 124,348.5 C123.103,332.019 115.751,316.615 101.5,307.594 L101.5,31 L101.432,31 C101.439,30.64 101.435,30.835 101.443,30.417 C101.452,30.057 101.468,29.623 101.498,29.052 L101.498,28.947 C100.803,15.73 91.512,5.967 78.192,4.133 L78.104,4.125 L75.548,4.001 z" />
        </clipPath>
        <filter id="Shadow_2">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2.5" />
          <feOffset dx="0" dy="2" result="offsetblur" />
          <feFlood floodColor="#000000" />
          <feComposite in2="offsetblur" operator="in" />
        </filter>
        <clipPath id="Clip_3">
          <path d="M33.159,5.375 L116.841,5.375 L116.841,394.625 L33.159,394.625 z M71,13.375 L75,14.375 C67.554,14.751 60.793,19.485 59.412,27.125 L59,27.125 L59,316.532 C46.893,323.321 39.135,335.555 39.159,349.625 C39.159,370.06 55.206,386.625 75,386.625 C94.794,386.625 110.841,370.06 110.841,349.625 C110.501,335.774 103.449,323.042 91,316.532 L91,27.125 L90.588,27.125 C89.07,19.681 78.559,13.506 71,13.375 z" />
        </clipPath>
        <filter id="Shadow_4">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2.5" />
          <feOffset dx="0" dy="2" result="offsetblur" />
          <feFlood floodColor="#000000" />
          <feComposite in2="offsetblur" operator="in" />
        </filter>
        <radialGradient
          id={uid}
          gradientUnits="userSpaceOnUse"
          cx="75"
          cy="343.003"
          r="37.099"
        >
          <stop offset="0" stopColor="#F3F3F3" />
          <stop offset="1" stopColor={color} />
        </radialGradient>

        <filter id="Shadow_6">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2.5" />
          <feOffset dx="0" dy="2" result="offsetblur" />
          <feFlood floodColor="#000000" />
          <feComposite in2="offsetblur" operator="in" />
        </filter>

        <filter id="Shadow_8">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2.5" />
          <feOffset dx="0" dy="2" result="offsetblur" />
          <feFlood floodColor="#000000" />
          <feComposite in2="offsetblur" operator="in" />
        </filter>
        <clipPath id="Clip_9">
          <path d="M34.5,191 L55.5,191 L55.5,210 L34.5,210 z M49.5,199 L40.5,199 L40.5,202 L49.5,202 L49.5,199 z" />
        </clipPath>
        <filter id="Shadow_10">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2.5" />
          <feOffset dx="0" dy="2" result="offsetblur" />
          <feFlood floodColor="#000000" />
          <feComposite in2="offsetblur" operator="in" />
        </filter>
        <clipPath id="Clip_11">
          <path d="M34.5,91 L55.5,91 L55.5,110 L34.5,110 z M49.5,99 L40.5,99 L40.5,102 L49.5,102 L49.5,99 z" />
        </clipPath>
        <filter id="Shadow_12">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2.5" />
          <feOffset dx="0" dy="2" result="offsetblur" />
          <feFlood floodColor="#000000" />
          <feComposite in2="offsetblur" operator="in" />
        </filter>
      </defs>
      <g id="Layer_1">
        <g>
          <path
            d="M75.548,4.001 L78.104,4.125 L78.192,4.133 C91.512,5.967 100.803,15.73 101.498,28.947 L101.498,29.052 C101.468,29.623 101.452,30.057 101.443,30.417 C101.435,30.835 101.439,30.64 101.432,31 L101.5,31 L101.5,307.594 C115.751,316.615 123.103,332.019 124,348.5 C124,375.286 102.286,397 75.5,397 C48.714,397 27,375.286 27,348.495 C26.989,331.539 35.987,317.262 49.5,307.612 L49.5,31 L49.567,31 C49.561,30.64 49.564,30.835 49.557,30.417 C49.548,30.057 49.531,29.623 49.5,29 C49.5,15.184 61.15,4 75.548,4.001 z M75.5,6 C62.236,6 51.5,16.307 51.499,28.947 C51.53,29.537 51.547,29.989 51.556,30.369 C51.56,30.545 51.565,30.911 51.567,30.952 C51.571,31.083 51.56,31.023 51.723,31.792 L51.98,33 L51.5,33 L51.5,308.658 L51.06,308.955 C36.94,318.493 29.086,332.244 29,348.5 C29,374.181 49.819,395 75.5,395 C101.181,395 122,374.181 122,348.525 C121.584,332.071 113.572,317.514 99.968,308.973 L99.5,308.679 L99.5,33 L99.02,33 L99.277,31.792 C99.44,31.023 99.429,31.083 99.433,30.952 C99.434,30.911 99.439,30.545 99.443,30.369 C99.472,29.497 99.454,29.947 99.498,29.017 C98.607,16.289 90.196,8.294 77.95,6.12 L75.5,6 z"
            clipPath="url(#Clip_1)"
            filter="url(#Shadow_2)"
            fill="rgba(0,0,0,0.75)"
          />
          <path
            d="M78.056,5.124 C90.746,6.871 99.822,16.113 100.5,29 C100.361,31.64 100.541,30.653 100.255,32 L100.5,32 L100.5,308.126 C114.607,316.983 122.582,331.984 123,348.5 C123,374.734 101.734,396 75.5,396 C49.266,396 28,374.734 28,348.5 C28.09,331.404 36.569,317.536 50.5,308.126 L50.5,32 L50.745,32 C50.459,30.653 50.639,31.64 50.5,29 C50.5,15.745 61.693,5 75.5,5 L78.056,5.124 z"
            fillOpacity="0"
            stroke="#6C6E70"
            strokeWidth="2"
          />
        </g>
        <g>
          <path
            d="M71,13.375 C78.559,13.506 89.07,19.681 90.588,27.125 L91,27.125 L91,316.532 C103.449,323.042 110.501,335.774 110.841,349.625 C110.841,370.06 94.794,386.625 75,386.625 C55.206,386.625 39.159,370.06 39.159,349.625 C39.135,335.555 46.893,323.321 59,316.532 L59,27.125 L59.412,27.125 C60.793,19.485 67.554,14.751 75,14.375 L71,13.375 z"
            clipPath="url(#Clip_3)"
            filter="url(#Shadow_4)"
            fill="rgba(0,0,0,0.75)"
          />
          <path
            clipPath="url(#cut-off-red)"
            d="M71,13.375 C78.559,13.506 89.07,19.681 90.588,27.125 L91,27.125 L91,316.532 C103.449,323.042 110.501,335.774 110.841,349.625 C110.841,370.06 94.794,386.625 75,386.625 C55.206,386.625 39.159,370.06 39.159,349.625 C39.135,335.555 46.893,323.321 59,316.532 L59,27.125 L59.412,27.125 C60.793,19.485 67.554,14.751 75,14.375 z"
            fill={`url(#${uid})`}
          />
        </g>
        {showGoalline && (
          <text transform="matrix(1, 0, 0, 1, 124.659, 35)">
            <tspan x="-19.341" y="6.5" fontSize="18" fill="#000000">
              Goal
            </tspan>
          </text>
        )}

        {allsteps.map((eachStep) => {
          return (
            <g key={eachStep.val}>
              <text
                textAnchor="end"
                x="42"
                y={eachStep.y - 5}
                className="small"
              >
                {eachStep.val}
              </text>

              <path
                d={`M49.5, ${eachStep.y} L51, ${eachStep.y} `}
                filter="url(#Shadow_10)"
                fill="rgba(0,0,0,0.75)"
              />
              <path
                d={`M40.5,${eachStep.y} L51, ${eachStep.y}`}
                fillOpacity="0"
                stroke="#6A6363"
                strokeWidth="3"
              />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

Thermometer.defaultProps = {
  width: "100px",
  height: "250px",
  steps: 5,
  minValue: 0,
  maxValue: 100,
  currentValue: 50,
  showGoalline: false,
  color: '#ffc347',
};

Thermometer.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  steps: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  currentValue: PropTypes.number,
  showGoalline: PropTypes.bool,
  color: PropTypes.string,
};