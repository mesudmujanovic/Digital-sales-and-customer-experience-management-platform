package com.Digital.Digital.Entity.Products;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Price {

    @Id
    @GeneratedValue( strategy = GenerationType.AUTO)
    private Long id;

    private String price;
    private Integer contractDuration;
    private Boolean oneTime;
    private String name;
    private Double discount;
}