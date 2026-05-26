import fs from 'fs';
let content = fs.readFileSync('src/main.js', 'utf8');

const target = `link.classList.add('acti// ─── ESSAY DATA (EMPOWERMENT PHILOSOPHY) ───`;

const replacement = `link.classList.add('active')
        }
      })
    }
  })
}, { threshold: 0.3 })

sections.forEach((section) => observer.observe(section))

// ─── ESSAY DATA (EMPOWERMENT PHILOSOPHY) ───`;

if (content.includes(target)) {
  console.log('Fixing the cut-off intersection observer block in main.js...');
  content = content.replace(target, replacement);
  fs.writeFileSync('src/main.js', content, 'utf8');
  console.log('src/main.js successfully repaired.');
} else {
  console.log('Target segment not found. Checking if there is a partial match...');
  const partialTarget = `link.classList.add('acti`;
  const idx = content.indexOf(partialTarget);
  if (idx !== -1) {
    // Replace from partialTarget up to "const essayData = {"
    const essayDataIdx = content.indexOf('const essayData = {');
    if (essayDataIdx !== -1) {
      const sliceToReplace = content.substring(idx, essayDataIdx);
      content = content.replace(sliceToReplace, `link.classList.add('active')
        }
      })
    }
  })
}, { threshold: 0.3 })

sections.forEach((section) => observer.observe(section))

// `);
      fs.writeFileSync('src/main.js', content, 'utf8');
      console.log('src/main.js repaired via robust index-slice.');
    }
  }
}
