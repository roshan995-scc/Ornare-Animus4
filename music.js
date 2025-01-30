const suggestions = {
    calm: [
        { title: "'Kho Gaye Hum kaha'- Jasleen R, Prateek K", link: "https://youtu.be/vt4jX0iRgCg?si=FxqBOIp3oNkpQZyt" },
        { title: "'Alag Asmaan'- Anuv Jain", link: "https://youtu.be/vA86QFrXoho?si=JAeUohUHpbM2TOsD" },
        { title: "'Farq ha'- Suzonn", link: "https://youtu.be/dfCuMoiwN6M?si=dmfH6FrPG7PdvSCJ" },
        { title: "'Dil Mere'- The local train ", link: "https://youtu.be/qLCLvzTGFVM?si=-CAC_4i8-XTQpq9N" },
        { title: "'Runaway'-  Aurora", link: "https://youtu.be/d_HlPboLRL8?si=nrkyoDNUnSlx481P" },
        { title: "'O rangrez'- Shreya Ghoshal, Javed Bashir", link: "https://youtu.be/jmpUP1MaQ9Q?si=5Ci_wrB3RUA9vAue" },
        { title: "'Blue'- Yung Kai", link: "https://youtu.be/IpFX2vq8HKw?si=OG1XhZcjYwQ11idC" },
        { title: "Phir se suru'- Ashu Shukla", link: "https://youtu.be/nB7nGcW9TyE?si=R9ynK9irqDsx5C18  " },
       
    ],
    happy: [
        { title: "'Happy'-Pharrell Williams", link: "https://youtu.be/y6Sxv-sUYtM?si=TQJtWk8YLWtmfgEn" },
        { title: "'Good as Hell'- Lizzo", link: "https://youtu.be/vuq-VAiW9kw?si=PKugxYugiDQq8xnJ" },
        { title: "'Taare Zameen Parl'- Shankar, Ehsaan, Loy", link: "https://youtu.be/kaMB6Rw8XzA?si=_QRNO55o3WyqvrhE"},
        { title: "'Rare Indian Instrument '- the Esraj ", link: "https://youtu.be/v488qzY6kpA?si=fy0mNJpLR0i4LI4r" },
        { title: "'Yellow (Acoustic) '- Amber Leigh Irish  ", link: "https://youtu.be/40Ha_d3m9hw?si=PO-lP5k3fmzW9pwt" },
        { title: "'up&up '- coldplay   ", link: "https://youtu.be/BPNTC7uZYrI?si=4YLEGiOOEacbPYoU" },
        { title: "'Let it go '- Idina Menzel  ", link: "https://youtu.be/L0MK7qz13bU?si=XVXX1Qg3G_9iKn96" },
        { title: "'How Far I'll Go '- Auli'i Cravalho   ", link: "https://youtu.be/cPAbx5kgCJo?si=uus1OL7baqFekf01" },
    ],
    focus: [
        { title: "'Nature Relaxation'- Relaxation Film", link: "https://youtu.be/RzVvThhjAKw?si=eS-Q3c8M6J3QZVU0" },
        { title: "'Winter Mission Outpost 2'- Ambient Outpost", link: "https://youtu.be/29S2rWCH1SU?si=VZqgu8n0QLZiIu0E" },
        { title: "'Cozy Coffee Shop Ambience'- Melchonic Piano", link: "https://youtu.be/m6SOJlkN1zU?si=U2urokf8_di-9Se1" },
        { title: "'Relaxing Ambient SPACE '- Future Scapes", link: "https://youtu.be/YUaSVFXTHlk?si=EEr8DcfAI3cOQ3R1" },
        { title: "'Chillstep Beats to Keep You Going'- Cosmic Hippos", link: "https://youtu.be/Yd7vDterctQ?si=ex8M1_XjaKYLFtrA" },
        { title: "'Those days are over'- Midwich Music", link: "https://youtu.be/pXdH3JyBrko?si=A4HUTcuoOsnyeVnK" },
        { title: "'Calming Ethereal '- Eternal Depth", link: "https://youtu.be/cBSUf04SHYY?si=W5Bs8u02srlZ2LIo" },
        { title: "'The Matrix (1999)'-Aliens World", link: "https://youtu.be/5_8B7u6Fa2M?si=Wc4WRrzKw5CRgto4" },
       
    ]
};

function showSuggestions(mood) {
    const moodTitle = document.getElementById("mood-title");
    const musicLinks = document.getElementById("music-links");
    const suggestionsBox = document.getElementById("suggestions");

    moodTitle.textContent = `Suggested Music for ${mood.charAt(0).toUpperCase() + mood.slice(1)}`;
    musicLinks.innerHTML = suggestions[mood]
        .map((item) => `<li><a href="${item.link}" target="_blank">${item.title}</a></li>`)
        .join("");
    suggestionsBox.classList.remove("hidden");
    suggestionsBox.style.display = "block";
}

function hideSuggestions() {
    document.getElementById("suggestions").style.display = "none";
}
