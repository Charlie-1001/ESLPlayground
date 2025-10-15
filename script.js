    const categories = [
      {name: "Oxford Phonics World", image: "images/phonics.png", link: "#phonics"},
      {name: "Footprint", image: "images/footprint.png", link: "#footprint"},
      { name: "Grading Activities", image: "images/grading-activities.png", link: "#gradingActivities" },
      { name: "Mini Games", image: "images/mini-games.png", link: "#miniGames" },
    ];

    const phonics2Games = [
      // Spell from the Sound
      { name: "Spell from the Sound", link: "https://charlie-1001.github.io/git-oxford-phonics-world-2/spell-from-the-sound.html" },

      // Unit-1
      { name: "Unit-1: Short-a-a", link: "https://charlie-1001.github.io/git-oxford-phonics-world-2/short-a-a.html" },
      { name: "Unit-1: Short-a-am", link: "https://charlie-1001.github.io/git-oxford-phonics-world-2/short-a-am.html" },
      { name: "Unit-1: Short-a-an", link: "https://charlie-1001.github.io/git-oxford-phonics-world-2/short-a-an.html" },
      { name: "Unit-1: Short-a-a-am-an", link: "https://charlie-1001.github.io/git-oxford-phonics-world-2/short-a-a-am-an.html" },

      // Unit-2
      { name: "Unit-2: Short-a-ad-ag", link: "https://charlie-1001.github.io/git-oxford-phonics-world-2/short-a-ad-ag.html" },
      { name: "Unit-2: Short-a-ap", link: "https://charlie-1001.github.io/git-oxford-phonics-world-2/short-a-ap.html" },
      { name: "Unit-2: Short-a-at", link: "https://charlie-1001.github.io/git-oxford-phonics-world-2/short-a-at.html" },
      { name: "Unit-2: Short-a-ad-ag-ap-at", link: "https://charlie-1001.github.io/git-oxford-phonics-world-2/short-a-ad-ag-ap-at.html" },

      // Unit-3
      { name: "Unit-3: Short-e-e", link: "https://charlie-1001.github.io/git-oxford-phonics-world-2/short-e-e.html" },
      { name: "Unit-3: Short-e-et", link: "https://charlie-1001.github.io/git-oxford-phonics-world-2/short-e-et.html" },
      { name: "Unit-3: Short-e-en-ed", link: "https://charlie-1001.github.io/git-oxford-phonics-world-2/short-e-en-ed.html" },
      { name: "Unit-3: Short-e-e-et-en-ed", link: "https://charlie-1001.github.io/git-oxford-phonics-world-2/short-e-e-et-en-ed.html" },

      // Unit-4
      { name: "Unit-4: Short-i-i", link: "https://charlie-1001.github.io/git-oxford-phonics-world-2/short-i-i.html" },
      { name: "Unit-4: Short-i-ip", link: "https://charlie-1001.github.io/git-oxford-phonics-world-2/short-i-ip.html" },
      { name: "Unit-4: Short-i-ib-id", link: "https://charlie-1001.github.io/git-oxford-phonics-world-2/short-i-ib-id.html" },
      { name: "Unit-4: Short-i-ip-ib-id", link: "https://charlie-1001.github.io/git-oxford-phonics-world-2/short-i-ip-ib-id.html" }
    ];

    const footprintVocabGames = [
      { name: "Unit 1 (My Birthday)", link: "https://charlie-1001.github.io/git-footprints-1-vocab/u-1-vocab-game.html" },
      { name: "Unit 2 (My Classroom)", link: "https://charlie-1001.github.io/git-footprints-1-vocab/u-2-vocab-game.html" },
      { name: "Unit 3 (My Body)", link: "https://charlie-1001.github.io/git-footprints-1-vocab/u-3-vocab-game.html" },
      { name: "Unit 4 (My Clothes)", link: "https://charlie-1001.github.io/git-footprints-1-vocab/u-4-vocab-game.html" },
    ];

    const footprintGrammarGames = [
      // Unit-1
      { name: "Unit-1: Here's a _______ for you. Thank You.", link: "https://charlie-1001.github.io/git-footprints-1-structures/structure-u1-1.html" },
      { name: "Unit-1: How old are you? I'm ________.", link: "https://charlie-1001.github.io/git-footprints-1-structures/structure-u1-2.html" },
      { name: "Unit-1: Are you _______? Yes, I am./ No, I'm not.", link: "https://charlie-1001.github.io/git-footprints-1-structures/structure-u1-3.html" },

      // Unit-2
      { name: "Unit-2: What's this? It's ________.", link: "https://charlie-1001.github.io/git-footprints-1-structures/structure-u2-1.html" },
      { name: "Unit-2: Can I have the ________, please? Here you are.", link: "https://charlie-1001.github.io/git-footprints-1-structures/structure-u2-2.html" },
      { name: "Unit-2: This/ My is __________.", link: "https://charlie-1001.github.io/git-footprints-1-structures/structure-u2-3.html" },

      // Unit-3
      { name: "Unit-3: This is/ These are my _______.", link: "https://charlie-1001.github.io/git-footprints-1-structures/structure-u3-1.html" }
    ];

    const gradingGames = [
      { name: "My Collection", image: "images/my-collection.png", link: "https://charlie-1001.github.io/git-grading-activities/my-collection.html" },
    ];

    const miniGames = [
      { name: "NPS Genius", image: "images/nps-genius.png", link: "https://charlie-1001.github.io/git-mini-games/nps-bot/index.html" },
      { name: "Quiz Game (Lower Level)", image: "images/lower-quiz.png", link: "https://charlie-1001.github.io/git-mini-games/quizGames/lowerLevel.html" },
      { name: "Quiz Game (Higher Level)", image: "images/higher-quiz.png", link: "https://charlie-1001.github.io/git-mini-games/quizGames/higherLevel.html" },
      { name: "QR Code Hunt", image: "images/qrCodeHunt.png", link: "https://charlie-1001.github.io/git-mini-games/qrCodeHunt/index.html" },
    ];

    const categoryContainer = document.getElementById("category");
    const phonicsGameContainer = document.getElementById("phonicsGameContainer");
    const footprintVocabGameContainer = document.getElementById("footprint1VocabGameContainer");
    const footprintGrammarGameContainer = document.getElementById("footprint1GrammarGameContainer");
    const gradingGameContainer = document.getElementById("gradingGameContainer");
    const miniGameContainer = document.getElementById("miniGameContainer");

    // auto open the details element
    document.querySelectorAll("details").forEach(detail => detail.open = true);

    // Dynamically create category items
    categories.forEach(cat => {
      const catDiv = document.createElement("div");
      catDiv.className = "category-item";
      catDiv.innerHTML = `
        <a href="${cat.link}">
          <img src="${cat.image}" alt="${cat.name}">
          <h3>${cat.name}</h3>        
        </a>
      `;
      categoryContainer.appendChild(catDiv);
    });

    // Dynamically add phonics games to the container
    phonics2Games.forEach(game => {
      const gameDiv = document.createElement("div");
      gameDiv.className = "game-item";
      gameDiv.innerHTML = `
        <a href="${game.link}" target="_blank"><h4>${game.name}</h4></a>
      `;
      phonicsGameContainer.appendChild(gameDiv);
    });

    // Dynamically add footprint vocab games to the container
    footprintVocabGames.forEach(game => {
      const gameDiv = document.createElement("div");
      gameDiv.className = "game-item";
      gameDiv.innerHTML = `
        <a href="${game.link}" target="_blank"><h4>${game.name}</h4></a>
      `;
      footprintVocabGameContainer.appendChild(gameDiv);
    });

    // Dynamically add footprint grammar games to the container
    footprintGrammarGames.forEach(game => {
      const gameDiv = document.createElement("div");
      gameDiv.className = "game-item";
      gameDiv.innerHTML = `
        <a href="${game.link}" target="_blank"><h4>${game.name}</h4></a>
      `;
      footprintGrammarGameContainer.appendChild(gameDiv);
    });

    // Dynamically add grading games to the container
    gradingGames.forEach(game => {
      const gameDiv = document.createElement("div");
      gameDiv.className = "category-item";
      gameDiv.innerHTML = `
        <a href="${game.link}" target="_blank">
          <img src="${game.image}" alt="${game.name}">
          <h3>${game.name}</h3>
        </a>
      `;
      gradingGameContainer.appendChild(gameDiv);
    });

    // Dynamically add mini games to the container
    miniGames.forEach(game => {
      const gameDiv = document.createElement("div");
      gameDiv.className = "category-item";
      gameDiv.innerHTML = `
        <a href="${game.link}" target="_blank">
          <img src="${game.image}" alt="${game.name}">
          <h3>${game.name}</h3>
        </a>
      `;
      miniGameContainer.appendChild(gameDiv);
    });
    