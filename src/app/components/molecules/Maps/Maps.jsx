function Maps() {
    return (
      <>
        <div className="sm:w-1/2">
          <div className="sm:m-auto sm:h-full">
            <div className="w-full h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8221.36432965681!2d106.8099104164235!3d-6.293126568881959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1a8b7dcfbd9%3A0xfe981ddde10b71e5!2sharisenin.com!5e0!3m2!1sid!2sid!4v1706290087695!5m2!1sid!2sid"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Maps;
  