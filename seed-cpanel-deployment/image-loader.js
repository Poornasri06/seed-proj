export default function myImageLoader({ src }) {
  if (src.startsWith('/seedv3/')) {
    return src;
  }
  return `/seedv3${src}`;
}
