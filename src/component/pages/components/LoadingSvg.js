export default function LoadingSvg () {
    return (
        <svg 
            style={{
                margin: "auto", 
                background: "none",
                display: "block",
                shapeRendering: "auto",
            }} 
            width="200px"
            height="200px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid">
                <circle 
                    cx="84" 
                    cy="50" 
                    r="10" 
                    fill="#20639b">
                    <animate
                        attributeName="r" 
                        repeatCount="indefinite" 
                        dur="0.24271844660194175s" 
                        calcMode="spline" 
                        keyTimes="0;1" 
                        values="10;0" 
                        keySplines="0 0.5 0.5 1" 
                        begin="0s"></animate>
                    <animate 
                        attributeName="fill" 
                        repeatCount="indefinite" 
                        dur="0.970873786407767s" 
                        calcMode="discrete" 
                        keyTimes="0;0.25;0.5;0.75;1" 
                        values="#20639b;#ed5533;#f6d55c;#3caea3;#20639b" 
                        begin="0s"></animate>
                </circle>
                <circle 
                    cx="16"
                    cy="50"
                    r="10"
                    fill="#20639b">
                    <animate 
                        attributeName="r" 
                        repeatCount="indefinite" 
                        dur="0.970873786407767s" 
                        calcMode="spline" 
                        keyTimes="0;0.25;0.5;0.75;1" 
                        values="0;0;10;10;10" 
                        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" 
                        begin="0s">
                    </animate>
                    <animate
                        attributeName="cx" 
                        repeatCount="indefinite"
                        dur="0.970873786407767s"
                        calcMode="spline"
                        keyTimes="0;0.25;0.5;0.75;1"
                        values="16;16;16;50;84"
                        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" 
                        begin="0s">
                    </animate>
                </circle>
                <circle 
                    cx="50" 
                    cy="50" 
                    r="10" 
                    fill="#3caea3">
                    <animate 
                        attributeName="r" 
                        repeatCount="indefinite" 
                        dur="0.970873786407767s" 
                        calcMode="spline" 
                        keyTimes="0;0.25;0.5;0.75;1" 
                        values="0;0;10;10;10" 
                        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" 
                        begin="-0.24271844660194175s">
                    </animate>
                    <animate
                        attributeName="cx"
                        repeatCount="indefinite"
                        dur="0.970873786407767s"
                        calcMode="spline"
                        keyTimes="0;0.25;0.5;0.75;1"
                        values="16;16;16;50;84"
                        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                        begin="-0.24271844660194175s">
                    </animate>
                </circle>
                <circle 
                    cx="84" 
                    cy="50" 
                    r="10" 
                    fill="#f6d55c">
                    <animate 
                        attributeName="r" 
                        repeatCount="indefinite" 
                        dur="0.970873786407767s" 
                        calcMode="spline" 
                        keyTimes="0;0.25;0.5;0.75;1" 
                        values="0;0;10;10;10" 
                        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" 
                        begin="-0.4854368932038835s">
                    </animate>
                    <animate 
                        attributeName="cx"
                        repeatCount="indefinite"
                        dur="0.970873786407767s"
                        calcMode="spline"
                        keyTimes="0;0.25;0.5;0.75;1"
                        values="16;16;16;50;84"
                        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                        begin="-0.4854368932038835s">
                    </animate>
                </circle>
                <circle 
                    cx="16" 
                    cy="50" 
                    r="10" 
                    fill="#ed5533">
                    <animate 
                        attributeName="r" 
                        repeatCount="indefinite" 
                        dur="0.970873786407767s"
                        calcMode="spline"
                        keyTimes="0;0.25;0.5;0.75;1"
                        values="0;0;10;10;10"
                        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                        begin="-0.7281553398058253s">
                    </animate>
                    <animate 
                        attributeName="cx" 
                        repeatCount="indefinite" 
                        dur="0.970873786407767s" 
                        calcMode="spline" 
                        keyTimes="0;0.25;0.5;0.75;1" 
                        values="16;16;16;50;84" 
                        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" 
                        begin="-0.7281553398058253s">
                    </animate>
                </circle>
        </svg>
    );
}