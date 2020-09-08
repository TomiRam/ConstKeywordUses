//prevent object mutation
function freezeObj(){
	"use strict";
	const MATH_COONSTANTS ={
		PI: 3.14
	};

	Object.freeze(MATH_COONSTANTS);

	/*try{ MATH_COONSTANTS.PI = 99;
	} catch(ex){
		console.log(ex);
	}*/
	return MATH_COONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);