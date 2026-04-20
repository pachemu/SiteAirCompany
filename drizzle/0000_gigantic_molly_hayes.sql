CREATE TABLE "products" (
	"id" uuid PRIMARY KEY NOT NULL,
	"category" varchar(255),
	"brand" varchar(255),
	"series" varchar(255),
	"model" varchar(255) NOT NULL,
	"power" varchar(255) NOT NULL,
	"energy_class" varchar(10),
	"price" numeric(12, 2) NOT NULL,
	"features" text,
	"image_url" text,
	"description" text,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "products_model_unique" UNIQUE("model")
);
