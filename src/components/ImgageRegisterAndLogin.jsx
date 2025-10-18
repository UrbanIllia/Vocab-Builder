const ImgageRegisterAndLogin = () => {
  return (
    <div className="mb-4 flex w-full items-center justify-center">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/images/mainillustration@x2.png 2x, /images/mainillustration@x1.png 1x"
          width="498"
          height="435"
        />
        <source
          srcSet="/images/mainillustration@x2.png 2x, /images/mainillustration@x1.png 1x"
          width="247"
          height="191"
        />
        <img
          src="/images/mainillustration@x1.png"
          alt="Illustration"
          width="363"
          height="318"
          loading="lazy"
          className="h-[220px] w-full max-w-full object-contain md:h-[435px] md:w-full"
        />
      </picture>
    </div>
  );
};

export default ImgageRegisterAndLogin;
