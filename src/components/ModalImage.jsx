const ModalImage = () => {
  return (
    <div className="-mx-4 flex justify-center self-end md:-mx-5">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/images/illustration@X2.png 2x, /images/illustration@X1.png 1x"
          width="498"
          height="435"
        />
        <source
          srcSet="/images/illustration@X2.png 2x, /images/illustration@X1.png 1x"
          width="363"
          height="318"
        />
        <img
          src="/images/illustration@X1.png"
          alt="Illustration"
          width="363"
          height="318"
          loading="lazy"
          className="h-[318px] w-full object-cover object-center md:h-[435px]"
        />
      </picture>
    </div>
  );
};
export default ModalImage;
