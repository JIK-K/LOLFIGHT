const baseRef = "/board";

const boardNavLinks = [
  //base주솔르 따로빼서 관리 해야할 듯
  { href: `${baseRef}/all`, title: "전체", slug: "all" },
  { href: `${baseRef}/free`, title: "자유", slug: "free" },
  { href: `${baseRef}/fight`, title: "싸움", slug: "fight" },
  { href: `${baseRef}/rgm`, title: "길드원 모집", slug: "rgm" },
];

export default boardNavLinks;
