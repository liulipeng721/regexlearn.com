const ProductButton = props => {
  return (
    <a
      href="https://www.producthunt.com/posts/regexlearn?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-regexlearn"
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      <img
        src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=319999&theme=light&period=daily"
        alt="RegexLearn - Learn RegEx step by step, from zero to advanced | Product Hunt"
        style={{ width: 250, height: 54, marginBottom: 30 }}
        width="250"
        height="54"
      />
    </a>
  );
};

export default ProductButton;
