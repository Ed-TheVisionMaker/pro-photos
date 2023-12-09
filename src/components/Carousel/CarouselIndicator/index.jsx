function CarouselIndicator({handleDotClick, images}) {
    return (
        <div className="carousel-indicator">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    )
}