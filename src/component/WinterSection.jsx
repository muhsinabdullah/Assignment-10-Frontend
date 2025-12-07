import React from 'react';

const WinterSection = () => {
    return (
        <div>
            <h2 class="text-3xl font-bold text-center text-primary mb-8">Winter Care Tips for Pets</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
                <div class="card shadow-lg bg-base-100 border">
                    <div class="card-body">
                        <div class="text-4xl mb-2">❄️</div>

                        <h3 class="card-title text-primary">Keep Your Pet Warm Indoors</h3>

                        <p class="text-sm opacity-80">
                            "As temperatures drop, ensure your pet stays cozy indoors. Provide soft blankets, warm bedding,
                            and avoid exposing them to cold floors for long periods."
                        </p>

                    </div>
                </div>
                <div class="card shadow-lg bg-base-100 border">
                    <div class="card-body">
                        <div class="text-4xl mb-2">🐾</div>

                        <h3 class="card-title text-primary">Moisturize Paws Regularly</h3>

                        <p class="text-sm opacity-80">
                            "Cold weather can cause cracked paws. Apply pet-safe balms to keep them moisturized and prevent
                            irritation from snow, salt, or ice."
                        </p>
                    </div>
                </div>

                <div class="card shadow-lg bg-base-100 border">
                    <div class="card-body">
                        <div class="text-4xl mb-2">📉</div>

                        <h3 class="card-title text-primary">Limit Outdoor Time</h3>

                        <p class="text-sm opacity-80">
                            "Shorter walks during extreme cold will reduce the risk of hypothermia, frostbite, and discomfort in your pets.
                            Stay alert to their body language."
                        </p>
                    </div>
                </div>
                <div class="card shadow-lg bg-base-100 border">
                    <div class="card-body">
                        <div class="text-4xl mb-2">💧</div>

                        <h3 class="card-title text-primary">Hydrate & Maintain Nutrition</h3>

                        <p class="text-sm opacity-80">
                            "Pets lose moisture faster in winter. Make sure water bowls stay full, and feed a balanced diet
                            to support warmth and immunity."
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WinterSection;