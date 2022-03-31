/* eslint-disable @next/next/no-img-element */
export default function Gallery(props) {
  return (
    <section className="">
      <div className="mx-auto">
        <div className="flex flex-wrap">
          {props.images.map((image, index) => (
            <div key={index} className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-center w-full h-full rounded-lg"
                  src={`/${image}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
