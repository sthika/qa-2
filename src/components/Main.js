import React from 'react'
import Button from '../components/Button';

const Main = () => {
  return (
    <main className='main'>
    <div className='container main__wrapper'>
      <div className='main__desc'>
        <h1 className='main__title'>
          Create, Sell & Collect Your Own Creative NFT
        </h1>
        <p className='main__subtitle'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit.
        </p>
        <div className='main__buttons'>
          <Button text={'Explore now'} className={'main__btn'} />
          <Button text={'Sell NFT'} className={'main__btn-gray'} />
        </div>
        <div className='main__benefits'>
          <div className='main__benefit'>
            <h3 className='main__benefit-title'>37k+</h3>
            <p className='main__benefit-desc'>Artworks</p>
          </div>
          <div className='main__benefit'>
            <h3 className='main__benefit-title'>20k+</h3>
            <p className='main__benefit-desc'>Artists</p>
          </div>
          <div className='main__benefit'>
            <h3 className='main__benefit-title'>99k+</h3>
            <p className='main__benefit-desc'>Aucations</p>
          </div>
        </div>
      </div>
      <div className='main__images'>
        <div className='main__images-left'>
          <div className='main__image main__image-skull'>
            <img
              src='https://s3-alpha-sig.figma.com/img/9076/5919/3e8e74d46404fda18c07a0a2642459c7?Expires=1696204800&Signature=MjLRVtuip0LyhaunCJ9AO9ZZ9GflXSCJMjNdvPKiFNJdXcN6cgs9zOc~ac6PhUEhwdCF78QdkRuHORSCT6H5tEOJHRocoWPuk2KNMVjDcUZY4gxx-ZiVy37gJR1NwAVELwF6AVNPNxlIe7PrO5YcwlRu3DMsLWC~vLp4tA4pZJFd209jYLJRYIbfYC~qAjNrOyNEzVlcRlpfPTCrDupFOQ~puWpLO0BErHl9iYUHAQWzvmBq0IrvmME6sZnuKchBkfNL-~C8Y3kbYZP3YSCnPzGSxqaGYrOb1cbSeV-WabZSIWnC9toDQ8m1o2VTM2Cl9YfGQih~Uyp8-ZHMc1n06g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
              alt=''
            />
          </div>

          <div className='main__image main__image-middle'>
            <img
              src='https://s3-alpha-sig.figma.com/img/cfd1/9538/29b3cf1bb0186e6d04299f1093b74f68?Expires=1696204800&Signature=FHylwJu0HnMG90rMqsFgLPkgJ6KL6fH1hm8Pu0B0mxhXbYVzE2j4lWeXwnOllZXmBshRe6Au8QALxyXlVk8-WwxcCEShe0L9atC1ZIxMt-fX~UVG0SkbdN4haSyVa7DjEdaeIrEIIdTvewcw-0jx4~kTksQod0VBY9xuUgRiN7twty7qI2gVM3GvFgcZ7Hsy~JOc9AeTassISOMcR~f5r8HD5PqMx9JC~YcLZrqi0ypppLmhhOruY10pjkrHiAhZjPqmxZ0jDUT2e0aQw0SNBpGit4WPRB2rudlGGgiTnlTi1f~SJ9zpjEl~R0q20XwNWQoRpNp7ARvs~aksSdXUdA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
              alt=''
            />
          </div>

          <div className='main__image main__image-camera'>
            <img
              src='https://s3-alpha-sig.figma.com/img/5ecc/7fc2/9f14ec01b7e3162118cb2b4a53281a9c?Expires=1696204800&Signature=jCsaY5ZB6Ct1aRmwq7BHuakV4rUxoLa3hBxk-gBfKVfvi~Au8xQapG0rJL3UsCxCwPcCBFaWX-qx3il-s8rTK5qTrAiy8FcKN4q4ECm18MMXmJ9u2LdOCvU5TwQDPUSd4OTLlSWYo2N8DuEBDiAmxGmuWZ2ZSZ5MBg0u9FQuu-wHEb2sgZhbCdNyQFax7dHIi~Cax0jhrgf6CTX-67PKg2IDMC4lQpwPs20LeNB4jvdr~SZnii2u9EP0RnbeiHis-6-EOqx5Vy8O0NXAjIXBBL3Lw4137renJA1k-iCR8qtwayQvVkAwyKGRYyMYrX9bqLg88pEXsMdgVOrhbF~VLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
              alt=''
            />
          </div>
        </div>
        <div className='main__images-center'>
          <div className='main__image main__image-heart'>
            <img
              src='https://s3-alpha-sig.figma.com/img/b895/8ee8/cc921c48add353ac8f286848691039a1?Expires=1696204800&Signature=UtTkxdZsPw6tvhq4fqKb9yuZSbLFJZ-TM2CwOs8gtOeQucmf~fDqO6sTy0kmIZrJTMQrEN9enSqgAAbeXgG32Ggaqs5G-Jaw0r4U2I2LXEhOTM11Fj5sQwlnPkJEu~scmPGJZ0V8EIAFBKCG5Z5miwFXmUpez30BYCPcLtQ4qhNDvKmNu0AySS9XLvofwyNew1DXkGi2miIXz7wuQ8YG2kVBwzxi19xVYuqG9OKT3gvSdn8j7GWEp0fyf715bi4f-BBqDPYiNQIz3G33FMvyXmW9bAaIa-Tw-pT-aYgGFiEx2QbpZf9l0ZGfQqC5sFuZyIcAEK14LjC64vrvPKD2xA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
              alt=''
            />
          </div>

          <div className='main__image main__image-middle'>
            <img
              src='https://s3-alpha-sig.figma.com/img/6cb0/e452/27718b82a62448b9096671e3f7154cce?Expires=1696204800&Signature=jF6h-fwjL~OoP5hfYklo4RhZjihz4n7uM3AZZqWU0f0mXzsihbP5NV-E0kYRS0aymk6MlKifbqspl1jDAbbKPT25jW1tSrjXXe23cH~YV3d365OEtHVBqNfO5NtfjODcMnYAsQdxCbYGMWJnM9CCA-8mKINAEK8WBeoN~WgeT4EgLezEMsWVjIGPapfwd5lgBfRcAzbrXCMUCFqU0Zl4pcHrxjAgHVAMBrpFc68afx5EOPgB9F8LIDdz5Gfjg5TZmTM7bIYg-bdyvCq92TRb84Z55nSxb7BsiGLUpbxG3YJmFVO0oPDvTydsrsdBKuk6EF97BDM6eytN9oSa0OMovw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
              alt=''
            />
          </div>

          <div className='main__image main__image-bunny'>
            <img
              src='https://s3-alpha-sig.figma.com/img/5596/f359/80ce76debb935391584c39d5b3aa6d5b?Expires=1696204800&Signature=gOGyGVvGSeXhy1tqqKWQXu60KShyIbLmxGGyqu8xtoH4QmaHlx~5vYAnEQzJDqvf1hOv2nyUprY-x~265BL3LkqcFudIJXBteKo072LilTeMvf5dMUAIcUg32Dp~4jX8PnZ7NWiEJdf-kEUY7w1X9-47F4bKLHuhIX8TUsN4b1svefg08jWjt2lbmqK4mR-bhMfE3B09qgo-cRDTXGwu2PamJEUmvTSJzv9ftFJqKKZO4xJ5w8XlU6j~82K5Znfqg3r9Hb0sLM2DGQE-Ss8OTyXA82hgUPvAg~x9fOa9OAWLOWYwmhThm~FY8ElYcqbz5NXcGKSFUJeBY6anCe-Y6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
              alt=''
            />
          </div>
        </div>
        <div className='main__images-right'>
          <div className='main__image main__image-man'>
            <img
              src='https://s3-alpha-sig.figma.com/img/4e05/8311/dece994edcd6aff724f24a10bc75d7d9?Expires=1696204800&Signature=cse2gHUUjJBD~zxM9911lWOi3kzEFNJsD0pDCYBXHZIfyiM09buSjuaxw7eITq11-iiKBiV8eO7tR0enMr23NNlWiQ-tNX~lay7gxKDUltNEBfHxucI2Ki7o76sl6XaZtB8gn4s5xrMciB9g8iZVgLQ7tjwButhd4KTtbbMLcRiVI94gm8lSdzpIvmQYEMX7J8Kdwo1JPVPOGTGvTA9c0uPl-GJqckkqZoqSCNWzBD1loWyRDPj3B-cys46H5IzmaP-iVoh9pxQ4flC2j6~wXgn4ddH9Si8DK8rPGj3RZG3sjmk6ANPasXjZFdhyUSpGz0So5fxUhCFQyKUFu0XRQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}

export default Main