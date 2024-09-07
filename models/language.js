class Language {
  constructor(
    id,
    codeIds,
    title,
    creator,
    year,
    popularity,
    description, // Renamed from usage
    frameworks,
    imageUrl,
    howToInstallSteps, // New property
    usedPlatforms // New property
  ) {
    this.id = id;
    this.codeIds = codeIds;
    this.title = title; // Framework name
    this.creator = creator;
    this.year = year;
    this.popularity = popularity;
    this.description = description; // Framework description
    this.frameworks = frameworks; // Related frameworks
    this.imageUrl = imageUrl;
    this.howToInstallSteps = howToInstallSteps; // Steps to install
    this.usedPlatforms = usedPlatforms; // Platforms where the framework is commonly used
  }
}

export default Language;
