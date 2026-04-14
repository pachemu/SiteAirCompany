-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE "products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"category" text,
	"brand" text,
	"series" text,
	"model" text NOT NULL,
	"power" text,
	"energy_class" text,
	"price" numeric,
	"features" text,
	"image_url" text,
	"created_at" timestamp with time zone DEFAULT now()
);

*/