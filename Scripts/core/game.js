// IIFE - Immediate Invoked Fucntion Expression
/*
    Closure
    Calls an anonympous self-executing function
    Anything in braces is in a closure. Won't go to global namespace.
*/
(function() {

    function Init() {
        console.log("Initialization start");
    }

    window.onload = Init;
})();