import React from 'react'

const Footer = () => {
    return (
        <>



            <footer className="bg-white pt-16 pb-16">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0 w-2/4">
                            <img src="/logo.svg" class="h-32 me-3" alt="Glassfrog Logo" />
                            <a href="https://flowbite.com/" className="flex items-center">

                                {/* <span className="self-center text-2xl font-semibold whitespace-nowrap ">Glassfrog</span> */}
                            </a>
                        </div>
                        <div className="flex w-2/4">
                            <div>
                                <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase ">Location</h2>
                                <ul className="text-gray-500  font-medium">
                                    <li className="mb-4">
                                        <a >​​Jumpstart Tower, 2nd floor, Haridwar Bypass Rd, opp. Nilaya Hills, Saraswati Vihar, Ajabpur Kalan, Dehradun, Uttarakhand 248001.</a>
                                    </li>
                                    <h2 className="mb-3 mt-6 text-sm font-semibold text-gray-900 uppercase ">Phone</h2>

                                    <li>
                                        <a >+91 9084712335, +91 9084712325</a>
                                    </li>
                                </ul>
                            </div>


                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center ">© 2024 <a href="https://glassfrogtech.com" className="hover:underline">Glassfrog Technology</a>. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <a href="https://www.facebook.com/GlassfrogTechnologies" className="text-gray-500 hover:text-gray-900 " target='_blank'>
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </a>


                            <a href="https://www.linkedin.com/company/glassfrog-technologies/mycompany/" className="text-gray-500 hover:text-gray-900 ms-5" target='_blank'>
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M4.98 3.5C3.42 3.5 2.167 4.753 2.167 6.313s1.253 2.813 2.813 2.813c1.56 0 2.812-1.253 2.812-2.813S6.54 3.5 4.98 3.5zm-.015 4.62c-.982 0-1.774-.793-1.774-1.77 0-.979.792-1.772 1.774-1.772.98 0 1.772.793 1.772 1.772 0 .979-.793 1.77-1.772 1.77zM2.334 7.5h5.296V20h-5.296zM8.354 3.5h5.296V7h.074c.784-1.48 2.7-2.84 4.604-2.84 4.922 0 5.828 3.24 5.828 7.46V20h-5.296v-8.06c0-1.92-.04-4.38-3.12-4.38-3.124 0-3.605 2.1-3.605 4.26V20h-5.296V7.5z" />
                                </svg>
                                <span className="sr-only">LinkedIn page</span>
                            </a>
                            <a href="https://www.instagram.com/glassfrog_technologies/" className="text-gray-500 hover:text-gray-900 ms-5" target='_blank'>
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c-5.084 0-9.334 4.25-9.334 9.334s4.25 9.334 9.334 9.334 9.334-4.25 9.334-9.334-4.25-9.334-9.334-9.334zm0 1.842c1.785 0 2.006.008 2.716.039.69.03 1.145.142 1.415.252.306.122.525.268.774.517s.396.468.517.774c.11.27.222.724.252 1.415.031.71.039.931.039 2.716s-.008 2.006-.039 2.716c-.03.69-.142 1.145-.252 1.415a2.964 2.964 0 0 1-.517.774c-.268.306-.468.396-.774.517-.27.11-.724.222-1.415.252-.71.031-.931.039-2.716.039s-2.006-.008-2.716-.039c-.69-.03-1.145-.142-1.415-.252a2.964 2.964 0 0 1-.774-.517 2.964 2.964 0 0 1-.517-.774c-.11-.27-.222-.724-.252-1.415-.031-.71-.039-.931-.039-2.716s.008-2.006.039-2.716c.03-.69.142-1.145.252-1.415.122-.306.268-.525.517-.774.306-.268.396-.396.774-.517.27-.11.724-.222 1.415-.252.71-.031.931-.039 2.716-.039zm0 1.187a7.162 7.162 0 0 0-1.941.26 1.737 1.737 0 0 0-1.081 1.081 7.162 7.162 0 0 0-.26 1.941c-.031.71-.039.931-.039 2.716s.008 2.006.039 2.716a7.162 7.162 0 0 0 .26 1.941 1.737 1.737 0 0 0 1.081 1.081 7.162 7.162 0 0 0 1.941.26c.71.031.931.039 2.716.039s2.006-.008 2.716-.039a7.162 7.162 0 0 0 1.941-.26 1.737 1.737 0 0 0 1.081-1.081 7.162 7.162 0 0 0 .26-1.941c.031-.71.039-.931.039-2.716s-.008-2.006-.039-2.716a7.162 7.162 0 0 0-.26-1.941 1.737 1.737 0 0 0-1.081-1.081 7.162 7.162 0 0 0-1.941-.26c-.71-.031-.931-.039-2.716-.039s-2.006.008-2.716.039zm0 2.202a4.712 4.712 0 0 1 4.708 4.708 4.712 4.712 0 0 1-4.708 4.708 4.712 4.712 0 0 1-4.708-4.708 4.712 4.712 0 0 1 4.708-4.708zm0 1.557a3.155 3.155 0 1 0 0 6.31 3.155 3.155 0 0 0 0-6.31zm5.339-.914a1.17 1.17 0 1 1 0 2.339 1.17 1.17 0 0 1 0-2.339z" />
                                </svg>
                                <span className="sr-only">Instagram page</span>
                            </a>


                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer