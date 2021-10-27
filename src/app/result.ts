export interface OneResult {
    data: {
        title: String,
        thumbnail: String,
        permalink: String
    }
}
export interface Results {
	data: {
		children: OneResult[]
       
	}
}

