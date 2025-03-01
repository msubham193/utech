import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const IntegrationBox = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; name: string }
>(({ className, children, name }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex items-center gap-2 rounded-lg  bg-gray-50 dark:bg-zinc-900  px-4 py-2.5 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
      <span className="text-black dark:text-white font-medium">{name}</span>
    </div>
  );
});
IntegrationBox.displayName = "IntegrationBox";

const CenterIcon = () => (
  <div className="size-16 z-10 rounded-xl border-2 border-purple-500/20 bg-zinc-900 p-4 shadow-md shadow-black">
    <svg
      viewBox="0 0 24 24"
      className="size-full dark:text-white"
      fill="currentColor"
    >
      <path d="M7 14.5l5-5 5 5" />
    </svg>
  </div>
);

export default function TechSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const startifyRef = useRef<HTMLDivElement>(null);
  const identifyRef = useRef<HTMLDivElement>(null);
  const nexusRef = useRef<HTMLDivElement>(null);
  const flexifyRef = useRef<HTMLDivElement>(null);
  const landifyRef = useRef<HTMLDivElement>(null);
  const platifyRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full min-h-screen  dark:bg-transparent flex flex-col items-center  px-4">
      <h1 className="text-4xl font-bold text-black dark:text-white mb-3">
        Our <span className="text-black dark:text-gray-500">Technologies</span>
      </h1>
      <p className="text-black dark:text-gray-400 text-center max-w-xl mb-20">
        Connect UTECH with your favorite Tech like AI and App developement.
        Enjoy a unified workflow for enhanced productivity and efficiency.
      </p>

      <div
        className="relative flex w-full max-w-[900px] items-center justify-center p-10"
        ref={containerRef}
      >
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-8">
            <IntegrationBox
              ref={startifyRef}
              name="React.js"
              className="shadow-md  shadow-black rounded-xl px-8 py-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 40 40"
              >
                <path
                  fill="#4e7ab5"
                  d="M20,28.9C8.598,28.9,0,25.17,0,20s8.598-9,20-9s20,3.83,20,9S31.402,28.9,20,28.9z M20,13.932 c-9.729,0-17.125,3.266-17.125,6.131S10.271,26.068,20,26.068s17.125-3.266,17.125-6.131S29.729,13.932,20,13.932z"
                ></path>
                <path
                  fill="#4e7ab5"
                  d="M12.402,38C12.401,38,12.402,38,12.402,38c-0.931,0-1.781-0.216-2.528-0.642 c-1.22-0.697-2.095-1.928-2.532-3.562c-1.146-4.282,0.703-11.482,4.713-18.344C16.76,7.407,23.007,2.003,27.599,2.003 c0.93,0,1.78,0.216,2.527,0.642c1.218,0.695,2.094,1.925,2.531,3.558c1.147,4.282-0.703,11.483-4.715,18.345 C23.241,32.594,16.995,38,12.402,38z M27.599,5.003c-2.888,0-8.409,4.193-12.954,11.963c-4.123,7.056-5.332,12.909-4.404,16.054 c0.251,0.849,0.605,1.438,1.121,1.732c2.361,1.348,8.809-2.85,13.991-11.717c4.125-7.057,5.46-12.785,4.406-16.055 c-0.271-0.841-0.604-1.435-1.119-1.728C28.347,5.084,28.006,5.003,27.599,5.003z"
                ></path>
                <path
                  fill="#4e7ab5"
                  d="M27.599,37.997C27.599,37.997,27.599,37.997,27.599,37.997c-4.597-0.001-10.843-5.405-15.544-13.449 c-4.01-6.862-5.859-14.063-4.713-18.344C7.779,4.57,8.654,3.339,9.873,2.643C10.621,2.216,11.471,2,12.4,2 c4.595,0,10.84,5.406,15.542,13.452c4.011,6.861,5.86,14.062,4.714,18.345c-0.438,1.633-1.313,2.863-2.53,3.558 C29.379,37.781,28.528,37.997,27.599,37.997z M12.4,5c-0.407,0-0.747,0.082-1.04,0.248c-0.515,0.294-0.874,0.881-1.12,1.732 c-0.928,3.208,0.281,8.999,4.404,16.055c4.541,7.769,10.063,11.962,12.954,11.962l0,0c0.408,0,0.748-0.082,1.041-0.249 c0.514-0.292,0.883-0.876,1.118-1.728c0.867-3.146-0.281-9-4.405-16.055C20.811,9.194,15.29,5,12.4,5z"
                ></path>
                <path
                  fill="#8bb7f0"
                  d="M23.5,20c0,1.935-1.565,3.5-3.5,3.5s-3.5-1.565-3.5-3.5s1.565-3.5,3.5-3.5S23.5,18.065,23.5,20z"
                ></path>
                <path
                  fill="#4e7ab5"
                  d="M20,24c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S22.206,24,20,24z M20,17c-1.654,0-3,1.346-3,3 s1.346,3,3,3s3-1.346,3-3S21.654,17,20,17z"
                ></path>
                <path
                  fill="#8bb7f0"
                  d="M20,28.068C9.346,28.068,1,24.524,1,20s8.346-8.068,19-8.068S39,15.476,39,20 S30.654,28.068,20,28.068z M20,12.932c-9.757,0-18,3.237-18,7.068s8.243,7.068,18,7.068S38,23.832,38,20S29.757,12.932,20,12.932z"
                ></path>
                <path
                  fill="#8bb7f0"
                  d="M12.402,37C12.401,37,12.402,37,12.402,37c-0.755,0-1.438-0.172-2.033-0.511 c-0.996-0.569-1.689-1.562-2.062-2.952c-1.081-4.037,0.729-10.938,4.61-17.581C17.379,8.33,23.416,3.003,27.599,3.003 c0.754,0,1.438,0.172,2.032,0.511c0.995,0.568,1.688,1.56,2.061,2.948c1.081,4.037-0.729,10.938-4.612,17.582 C22.621,31.672,16.586,37,12.402,37z M27.599,4.003c-3.784,0-9.595,5.239-13.817,12.458c-3.695,6.325-5.507,13.083-4.508,16.818 c0.301,1.123,0.836,1.91,1.592,2.342C11.307,35.872,11.823,36,12.401,36c3.785,0,9.595-5.24,13.814-12.461 c3.697-6.326,5.51-13.085,4.509-16.818c-0.3-1.121-0.835-1.908-1.59-2.338C28.693,4.131,28.177,4.003,27.599,4.003z"
                ></path>
                <g>
                  <path
                    fill="#8bb7f0"
                    d="M27.599,36.997C27.599,36.997,27.599,36.997,27.599,36.997c-4.187-0.001-10.224-5.327-14.681-12.953 C9.036,17.401,7.227,10.5,8.308,6.463c0.372-1.39,1.065-2.383,2.062-2.952C10.964,3.172,11.647,3,12.4,3 c4.185,0,10.221,5.328,14.679,12.956c3.883,6.642,5.692,13.543,4.61,17.582c-0.371,1.389-1.064,2.381-2.059,2.948 C29.036,36.825,28.353,36.997,27.599,36.997z M12.4,4c-0.577,0-1.094,0.128-1.535,0.379c-0.756,0.432-1.291,1.219-1.592,2.342 c-0.999,3.734,0.813,10.493,4.508,16.818C18,30.757,23.812,35.996,27.599,35.997l0,0c0.578,0,1.095-0.128,1.536-0.38 c0.754-0.43,1.289-1.217,1.589-2.338c1-3.735-0.812-10.494-4.508-16.818C21.996,9.241,16.187,4,12.4,4z"
                  ></path>
                </g>
              </svg>
            </IntegrationBox>
            <IntegrationBox
              ref={identifyRef}
              name="Next.js"
              className="shadow-md  shadow-black rounded-xl px-8 py-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path
                  fill="white"
                  d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"
                ></path>
              </svg>
            </IntegrationBox>
            <IntegrationBox
              ref={nexusRef}
              name="Flutter"
              className="shadow-md  shadow-black rounded-xl px-8 py-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <linearGradient
                  id="gFTOxFpGMtrTwKmyJmDVma_pCvIfmctRaY8_gr1"
                  x1="34.31"
                  x2="21.223"
                  y1="47.31"
                  y2="34.223"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#0176d0"></stop>
                  <stop offset=".454" stopColor="#0275ce"></stop>
                  <stop offset=".617" stopColor="#0472c7"></stop>
                  <stop offset=".733" stopColor="#076bbc"></stop>
                  <stop offset=".827" stopColor="#0d63ab"></stop>
                  <stop offset=".907" stopColor="#135895"></stop>
                  <stop offset=".933" stopColor="#16538c"></stop>
                </linearGradient>
                <polygon
                  fill="url(#gFTOxFpGMtrTwKmyJmDVma_pCvIfmctRaY8_gr1)"
                  points="37,44 25,44 14,33 20,27"
                ></polygon>
                <polygon fill="#50e6ff" points="5,24 25,4 37,4 11,30"></polygon>
                <polygon
                  fill="#50e6ff"
                  points="37,22 20,39 14,33 25,22"
                ></polygon>
                <rect
                  width="8.485"
                  height="8.485"
                  x="15.757"
                  y="28.757"
                  fill="#35c1f1"
                  transform="rotate(-45.001 20 33)"
                ></rect>
              </svg>
            </IntegrationBox>
          </div>

          <div className="flex items-center" ref={centerRef}>
            <CenterIcon />
          </div>

          <div className="flex flex-col gap-8">
            <IntegrationBox
              ref={flexifyRef}
              name="AI"
              className="shadow-md  shadow-black rounded-xl px-8 py-5 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <radialGradient
                  id="oDvWy9qKGfkbPZViUk7TCa_eoxMN35Z6JKg_gr1"
                  cx="-670.437"
                  cy="617.13"
                  r=".041"
                  gradientTransform="matrix(128.602 652.9562 653.274 -128.6646 -316906.281 517189.719)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#1ba1e3"></stop>
                  <stop offset="0" stopColor="#1ba1e3"></stop>
                  <stop offset=".3" stopColor="#5489d6"></stop>
                  <stop offset=".545" stopColor="#9b72cb"></stop>
                  <stop offset=".825" stopColor="#d96570"></stop>
                  <stop offset="1" stopColor="#f49c46"></stop>
                </radialGradient>
                <path
                  fill="url(#oDvWy9qKGfkbPZViUk7TCa_eoxMN35Z6JKg_gr1)"
                  d="M22.882,31.557l-1.757,4.024c-0.675,1.547-2.816,1.547-3.491,0l-1.757-4.024	c-1.564-3.581-4.378-6.432-7.888-7.99l-4.836-2.147c-1.538-0.682-1.538-2.919,0-3.602l4.685-2.08	c3.601-1.598,6.465-4.554,8.002-8.258l1.78-4.288c0.66-1.591,2.859-1.591,3.52,0l1.78,4.288c1.537,3.703,4.402,6.659,8.002,8.258	l4.685,2.08c1.538,0.682,1.538,2.919,0,3.602l-4.836,2.147C27.26,25.126,24.446,27.976,22.882,31.557z"
                ></path>
                <radialGradient
                  id="oDvWy9qKGfkbPZViUk7TCb_eoxMN35Z6JKg_gr2"
                  cx="-670.437"
                  cy="617.13"
                  r=".041"
                  gradientTransform="matrix(128.602 652.9562 653.274 -128.6646 -316906.281 517189.719)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#1ba1e3"></stop>
                  <stop offset="0" stopColor="#1ba1e3"></stop>
                  <stop offset=".3" stopColor="#5489d6"></stop>
                  <stop offset=".545" stopColor="#9b72cb"></stop>
                  <stop offset=".825" stopColor="#d96570"></stop>
                  <stop offset="1" stopColor="#f49c46"></stop>
                </radialGradient>
                <path
                  fill="url(#oDvWy9qKGfkbPZViUk7TCb_eoxMN35Z6JKg_gr2)"
                  d="M39.21,44.246l-0.494,1.132	c-0.362,0.829-1.51,0.829-1.871,0l-0.494-1.132c-0.881-2.019-2.467-3.627-4.447-4.506l-1.522-0.676	c-0.823-0.366-0.823-1.562,0-1.928l1.437-0.639c2.03-0.902,3.645-2.569,4.511-4.657l0.507-1.224c0.354-0.853,1.533-0.853,1.886,0	l0.507,1.224c0.866,2.088,2.481,3.755,4.511,4.657l1.437,0.639c0.823,0.366,0.823,1.562,0,1.928l-1.522,0.676	C41.677,40.619,40.091,42.227,39.21,44.246z"
                ></path>
              </svg>
            </IntegrationBox>
            <IntegrationBox
              ref={landifyRef}
              name="Nodejs"
              className="shadow-md  shadow-black rounded-xl px-8 py-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#21a366"
                  d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"
                ></path>
                <path
                  fill="#21a366"
                  d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"
                ></path>
              </svg>
            </IntegrationBox>
            <IntegrationBox
              ref={platifyRef}
              name="Swift"
              className="shadow-md  shadow-black rounded-xl px-8 py-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FF6D00"
                  d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.208-1.791,4-4,4H10c-2.209,0-4-1.792-4-4V10z"
                ></path>
                <path
                  fill="#E64A19"
                  d="M6,10v11.967l4,4c0,0,11.153,12.881,20,4.033s-3.981-19-3.981-19l-5.005-5H10C7.791,6,6,7.79,6,10z"
                ></path>
                <path
                  fill="#FFF"
                  d="M26.019,11c11.429,7.698,7.732,16.187,7.732,16.187s3.25,3.634,1.936,6.813c0,0-1.34-2.226-3.588-2.226c-2.166,0-3.44,2.226-7.8,2.226C14.591,34,10,25.967,10,25.967c8.747,5.7,14.719,1.663,14.719,1.663C20.778,25.364,12,14,12,14c7.299,6.155,11,8,11,8c-1.882-1.542-8-9-8-9c4.224,4.238,13.307,10.378,13.307,10.378C30.691,16.834,26.019,11,26.019,11z"
                ></path>
              </svg>
            </IntegrationBox>
          </div>
        </div>

        {/* {[startifyRef, identifyRef, nexusRef].map((fromRef, i) => ( */}
        <AnimatedBeam
          duration={3}
          delay={1 * 0.2}
          containerRef={containerRef}
          fromRef={startifyRef}
          toRef={centerRef}
        />
        <AnimatedBeam
          duration={3}
          delay={2 * 0.2}
          containerRef={containerRef}
          fromRef={identifyRef}
          toRef={centerRef}
        />
        <AnimatedBeam
          duration={3}
          delay={2 * 0.2}
          containerRef={containerRef}
          fromRef={nexusRef}
          toRef={centerRef}
        />
        {/* ))} */}

        <AnimatedBeam
          duration={3}
          delay={1 * 0.2}
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={flexifyRef}
          curvature={75}
          // className="rotate-180"
          // curvature={20}
          // reverse
        />

        <AnimatedBeam
          duration={3}
          delay={1 * 0.2}
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={landifyRef}
          curvature={0}
          // className="rotate-180"
          // curvature={20}
          // reverse
        />
        <AnimatedBeam
          duration={3}
          delay={1 * 0.2}
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={platifyRef}
          curvature={-75}
          // className="rotate-180"
          // curvature={20}
          // reverse
        />
      </div>
    </div>
  );
}
