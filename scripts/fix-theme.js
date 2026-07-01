const fs = require('fs');
const files = [
  'src/app/membership/page.tsx',
  'src/app/inquiry/page.tsx',
  'src/app/inquiry/new/page.tsx',
  'src/app/facilities/page.tsx',
  'src/app/contact/page.tsx',
];

const replacements = [
  // backgrounds
  [/bg-midnight-\d+\/\d+/g, 'bg-white/80'],
  [/bg-midnight-\d+/g, 'bg-white'],
  [/bg-ocean-\d+\/\d+/g, 'bg-sky-50'],
  [/bg-ocean-\d+/g, 'bg-sky-50'],
  // gradients from/to
  [/from-midnight-\d+\/\d+/g, 'from-white'],
  [/from-midnight-\d+/g, 'from-amber-50'],
  [/to-midnight-\d+\/\d+/g, 'to-amber-50'],
  [/to-midnight-\d+/g, 'to-amber-50'],
  [/from-ocean-\d+\/\d+/g, 'from-sky-50'],
  [/from-ocean-\d+/g, 'from-sky-50'],
  [/to-ocean-\d+\/\d+/g, 'to-teal-50'],
  [/to-ocean-\d+/g, 'to-teal-50'],
  // borders
  [/border-gold-500\/\d+/g, 'border-gold-200'],
  [/border-aqua-500\/\d+/g, 'border-sky-200'],
  [/border-gray-\d+/g, 'border-stone-200'],
  // text colors - dark theme specific
  [/text-aqua-300/g, 'text-sky-600'],
  [/text-aqua-400/g, 'text-sky-500'],
  [/text-gold-300/g, 'text-gold-600'],
  [/text-gray-200/g, 'text-stone-700'],
  [/text-gray-300/g, 'text-stone-600'],
  [/text-gray-400/g, 'text-stone-500'],
  [/text-gray-500/g, 'text-stone-400'],
  [/text-gray-600/g, 'text-stone-400'],
  // card classes
  [/card-arabian/g, 'card-arabian'],
  [/card-ocean/g, 'card-ocean'],
  // input field
  [/input-field/g, 'input-field'],
  // special: remove dark ring
  [/ring-gold-500\/50/g, 'ring-gold-400/50'],
  // overall body bg references
  [/bg-midnight-900/g, 'bg-white'],
];

files.forEach(file => {
  if (!fs.existsSync(file)) { console.log('NOT FOUND:', file); return; }
  let content = fs.readFileSync(file, 'utf8');
  replacements.forEach(([from, to]) => {
    content = content.replace(from, to);
  });
  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated:', file);
});
console.log('Done!');
