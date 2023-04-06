import { SectionWrapper } from '@/hoc'
import React from 'react'

function Interversions() {
    return (
        <div class="bg-gray-20 text-gray-600 px-6 lg:px-4 py-8 mx-auto ">
            <div class="max-w-screen-xl mx-auto text-center">
                <div class="grid grid-cols-8 md:grid-cols-9 lg:grid-cols-8 divide-gray-200 divide-y-2 md:divide-x-2 md:divide-y-0 md:-mx-8" >
                    <div class="col-span-8 md:col-span-3 lg:col-span-3 md:px-8 py-4 md:py-0 justify-between ">
                        <h5 class="text-xl font-semibold text-gray-700">Clinical Psychology</h5>
                        <nav class="mt-4">
                            <ul class="text-center justify-between flex-wrap">
                                <li class="mb-2">
                                    <a href="#" class="font-sm text-gray-400 text-base hover:text-gray-400">Humanistic perspective:</a>
                                    <a href="#" class="font-sm text-base hover:text-gray-400">Humanistic psychology: a more recent development in the history of psychology, humanistic psychology grew out of the need for a more positive view of human beings than was offered by psychoanalysis or behaviorism. Humans are innately good, which means there is nothing inherently negative or evil about them (humans)..</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div class="col-span-8 justify-center md:col-span-3 lg:col-span-3 md:px-8 py-4 md:py-0">
                        <h5 class="text-xl font-semibold text-gray-700">Cognitive Psychology</h5>
                        <nav class="mt-4">
                            <ul class="text-center justify-between flex-wrap">
                                <li class="mb-2">
                                    <a href="#" class="font-sm text-gray-400 text-base hover:text-gray-400">Conclusion</a>
                                    <a href="#" class="font-sm text-base hover:text-gray-400">While scientific thinking and theories have now expanded further beyond the rigid dichotomous dogma of cognitive / behaviorist schools of thought, the new findings that were revealed along the way remain immensely valuable when considering the function of the mind, brain, and behavior. A more holistic, and yet nuanced.
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

        {/* in cards ko center kr dena maine kya but property kaam nai kar rahi thi */}
                </div>
            </div>
        </div>

    )
}

export default SectionWrapper(Interversions,'inter')