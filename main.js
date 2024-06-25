var myvar = document.getElementsByClassName("toggle-menu")[0];
const mynav = document.getElementById("nav");
myvar.onclick = function () {
  console.log("suiii");
  mynav.classList.toggle("mobile-view");
};
/******************/
/*Type writter effect*/
// Typewriter effect function
function typewriterEffect(elementId, text, speed = 150) {
  const element = document.getElementById(elementId);
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
}
//Usage
typewriterEffect("hello", "مرحبا بك في بيت القصائد", 80);
/*
typewriterEffect(
  'hellop',
  'موقع الكتروني تعليمي يختص بشرح القصائد للصفوف المتقدمة؛ بحيث تصل الى ذهن الطالب بشكلٍ سلسل وأسلوب مميز وممتع.',
  50
);
typewriterEffect('hello2', 'إبدأ خطوتك الأولى في التعلم', 80);
// window.scrollY>20
*/
