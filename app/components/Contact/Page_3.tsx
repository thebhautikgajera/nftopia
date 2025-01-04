import React from 'react'

const Page_3 = () => {
  return (
    <div className="w-full h-[400px] relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14878.575518878627!2d72.85614367775164!3d21.23444639440251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f3c8e1f1e37%3A0x7a1e9820c24da21f!2sUtran%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1684326127544!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
    </div>
  )
}

export default Page_3