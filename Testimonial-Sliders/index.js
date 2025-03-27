const testimonials = [
  {
    name: "Sophia Adams",
    photoUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: " Matrix is truly the best in the blockchain developer industry. Their team of expert developers delivers top- notch solutions at affordable prices.I highly recommend Matrix for anyone looking for a master in  blockchain development.",
  },

  {
    name: " Emily Johnson",
    photoUrl:
      "https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: " Matrix is the best choice for blockchain development. Their team of experts delivers high-quality solutions at affordable prices. I was impressed by their masterful execution of my project.",
  },

  {
    name: "Sophia Parker",
    photoUrl:
      "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: " Matrix is the best when it comes to blockchain development. Their team of experts work diligently to provide affordable solutions. I am grateful for their masterful execution and professionalism.",
  },
];

const imgE1 = document.querySelector("img");
const textE1 = document.querySelector(".text");
const usernameE1 = document.querySelector(".username");

let idx = 0;

update();
function update() {
  const { name, photoUrl, text } = testimonials[idx];
  imgE1.src = photoUrl;
  textE1.innerText = text;
  usernameE1.innerText = name;
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(() => {
    update();
  }, 2000);
}
