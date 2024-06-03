let typedName = new Typed('.auto-input',{
    strings: ['Kevin Imanuel Bujani', 'Bintang Wira Gemilang', 'M.Aziz Al-Hanif', 'Farhan Alwanda', 'Audri Refi Maulana'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1000,
    loop: true,


    onStringTyped: function(index) {
        let images = ['1.JPG', '2.JPG', '3.JPG', '4.JPG', '5.JPG']; 
        let imgElement = document.querySelector('.about img');
        imgElement.src = images[index % images.length];
    }
    
 });

 let typedId = new Typed('.auto',{
    strings: ['001202200021', '001202200062', '001202200009', '001202200038', '001202200019'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 4000,
    loop: true,
})

