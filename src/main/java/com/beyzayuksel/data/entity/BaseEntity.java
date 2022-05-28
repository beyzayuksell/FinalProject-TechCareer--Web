package com.beyzayuksel.data.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.web.bind.annotation.GetMapping;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

//Her entitynin ortak özelliklerini ana bir class ta birleştirdik.
@MappedSuperclass
@Getter
@Setter

//Audit tanıtmak
@EntityListeners(AuditingEntityListener.class)
//audit - kim, ne zaman database içinde bir tabloyu güncellenmiş,
// tablodan sisteme birşey eklemiş, hangi user ile yapmış, ..
// gibi log bilgilerini tutan yapıdır.
//Json pars için işlem yapılmasına izin vermemek, takip edilmesi istenmeyen attribute lar eklenir
@JsonIgnoreProperties(value={"created_date,update_date"},allowGetters = true)
abstract public class BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id", nullable = false, updatable = false)
    private Long id;


    //Kim ekledi -audit(izleme yapısı)
    @Column(name="created_by")
    @CreatedBy
    private String createdBy;

    //Kim ne zaman ekledi
    @Column(name="created_date")
    @CreatedDate
    public Date createdDate;

    //Kim guncelledi
    @Column(name="updated_by")
    @LastModifiedBy
    private String updateBy;

    //Kim ne zaman gucelledi
    @Column(name="update_date")
    @LastModifiedDate
    public Date updateDate;


    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    @Column(name="system_created_date", updatable = false)
    private Date date;
}
