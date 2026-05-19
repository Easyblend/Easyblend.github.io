# cv/ — LaTeX source for Emmanuel Kumah's CV

`Emmanuel_Kumah_CV.tex` is the canonical source for the CV displayed at
[easyblend.me](https://easyblend.me) (rendered from `public/cv.pdf`).

## Compile

Pick whichever flow you prefer — they all produce the same PDF.

### Option A — Overleaf (zero install, recommended)
1. Go to <https://www.overleaf.com/project>, click **New Project → Upload Project**.
2. Upload `Emmanuel_Kumah_CV.tex` **and** `photo.jpg` (used in the sidebar).
3. In Overleaf, set the compiler to **XeLaTeX** (Menu → Settings → Compiler).
4. Hit **Recompile**. Download the PDF and drop it at `public/cv.pdf`.

> The template uses Fira Sans + Playfair Display + JetBrains Mono.
> Overleaf has all three preinstalled.

### Option B — Local TeX (MiKTeX / TeX Live) — use XeLaTeX
```powershell
xelatex -output-directory=cv cv/Emmanuel_Kumah_CV.tex
Copy-Item cv/Emmanuel_Kumah_CV.pdf public/cv.pdf -Force
```

### Option C — Tectonic (single-binary)
```powershell
tectonic cv/Emmanuel_Kumah_CV.tex
Copy-Item cv/Emmanuel_Kumah_CV.pdf public/cv.pdf -Force
```

## Tailoring
The source pulls from the master profile at
`~/Desktop/CV WorkFlow/MASTER_PROFILE.prompt.md`. To tweak for a specific
audience, edit the **Profile**, **Experience bullets**, and **Skills** sections
— the structure and styling stay the same.
