interface Place {
    type: string;
    coordinates: number[];
};

export interface Destiny {
    id: number;
    photo: string;
    place: Place;
    place_id: string;
    city: string | null;
    country: string | null;
    address: string;
    zip_code: null;
    short_address: string;
    reviews_count: number;
    stars_count: number;
    review_score: number;
    created_at: string;
    updated_at: string;
}