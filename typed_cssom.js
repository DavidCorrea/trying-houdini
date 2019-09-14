/*
    CSSKeywordValue: CSS Keywords and other identifiers (like inherit or grid)

    CSSPositionValue: Position (x and y) values

    CSSImageValue: An object representing the value properties for an image

    CSSUnitValue: Numeric values that can be expressed as a single value with single unit (like 50px) or a single value or percentage without a unit

    CSSMathValue: Complicated numeric values, like you would find with calc, min, and max. This includes subclasses CSSMathSum, CSSMathProduct, CSSMathMin, CSSMathMax, CSSMathNegate, and CSSMathInvert

    CSSTransformValue: A list of CSS transforms consisting of CSSTransformComponents, including CSSTranslate, CSSRotate, CSSScale, CSSSkew, CSSSkewX, CSSSkewY, CSSPerspective, and/or CSSMatrixComponent
*/

const inputs = [...document.getElementsByClassName('input')];

inputs.forEach((input) => {
    const crazyCalc = new CSSMathSum(new CSSMathSum(CSS.em(2), CSS.px(1)), CSS.px(0.5));
    input.attributeStyleMap.set('font-size', crazyCalc);

    const inputComputedStyles = input.computedStyleMap();
    console.log(inputComputedStyles.get('height'));
});

 