package config

import (
	"github.com/spf13/viper"
)

type Config struct {
	DB     DB     `mapstructure:"DB"`
	Server Server `mapstructure:"SERVER"`
}

type DB struct {
	Host string `mapstructure:"HOST"`
	Name string `mapstructure:"NAME"`
	User string `mapstructure:"USER"`
	Pass string `mapstructure:"PASS"`
}

type Server struct {
	Port string
}

func Init() (*Config, error) {
	var cfg *Config

	config := viper.New()

	config.SetConfigName(`config`)
	config.SetConfigType(`yaml`)
	config.AddConfigPath(`.`)

	if err := config.ReadInConfig(); err != nil {
		return cfg, err
	}

	if err := config.Unmarshal(&cfg); err != nil {
		return cfg, err
	}

	return cfg, nil
}
